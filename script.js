'use strict';

let resultArray = [];
// console.log(resultArray);
let dataJson;
// console.log(resultArray);
const pnrText = function () {
    return document.querySelector('.form-control').value;
};
const resultMessage = function (resultArray) {
    // console.log(resultArray);
    let resultString = '';
    for (let i = 0; i < resultArray.length; i++) {
        resultString += '\n' + resultArray[i] + '\n';
    }
    document.querySelector('.result').textContent = resultString;
};

$.getJSON('data.json', function (json) {
    dataJson = json;
});
function mainFunc(noEmptyArr) {
    const plane = noEmptyArr[0];
    let aviaCompany = '';
    let date = '';
    if (plane.length == 2) {
        aviaCompany = plane + ' ' + noEmptyArr[1];
    } else if (plane.length > 2) {
        aviaCompany = plane.slice(0, 2) + ' ' + plane.slice(2, 6);
    }

    for (let i = 0; i < noEmptyArr.length; i++) {
        if (i == 2 || (i == 3 && noEmptyArr[i].length == 5)) {
            date = noEmptyArr[i];
        }
    }
    let arrivedDeparture = '';
    let departure = '';
    let arrived = '';
    for (let i = 0; i < noEmptyArr.length; i++) {
        if (noEmptyArr[0].length == 2) {
            arrivedDeparture = noEmptyArr[5];
            departure = arrivedDeparture.slice(0, 3);
            arrived = arrivedDeparture.slice(3, 6);
        } else if (noEmptyArr[0].length == 6) {
            arrivedDeparture = noEmptyArr[4];
            departure = arrivedDeparture.slice(0, 3);
            arrived = arrivedDeparture.slice(3, 6);
        }
    }
    let timeDeparture = 0;
    let timeDepartureFirstOld = 0;
    let timeDepartureSecondOld = 0;
    let timeArrived = 0;
    let timeArrivedFirstOld = 0;
    let timeArrivedSecondOld = 0;

    for (let i = 0; i < noEmptyArr.length; i++) {
        if (
            noEmptyArr.length == 15 &&
            noEmptyArr[9].length == 4 &&
            noEmptyArr[10].length == 4
        ) {
            timeDepartureFirstOld = noEmptyArr[9].slice(0, 2);
            timeDepartureSecondOld = noEmptyArr[9].slice(2, 4);
            timeDeparture =
                timeDepartureFirstOld + ':' + timeDepartureSecondOld;

            timeArrivedFirstOld = noEmptyArr[10].slice(0, 2);
            timeArrivedSecondOld = noEmptyArr[10].slice(2, 4);
            timeArrived = timeArrivedFirstOld + ':' + timeArrivedSecondOld;
        } else if (noEmptyArr.length == 13 && noEmptyArr[0].length == 6) {
            timeDepartureFirstOld = noEmptyArr[7].slice(0, 2);
            timeDepartureSecondOld = noEmptyArr[7].slice(2, 4);
            timeDeparture =
                timeDepartureFirstOld + ':' + timeDepartureSecondOld;

            timeArrivedFirstOld = noEmptyArr[8].slice(0, 2);
            timeArrivedSecondOld = noEmptyArr[8].slice(2, 4);
            timeArrived = timeArrivedFirstOld + ':' + timeArrivedSecondOld;
        } else if (noEmptyArr[0].length == 6 && noEmptyArr[6].length == 4) {
            timeDepartureFirstOld = noEmptyArr[6].slice(0, 2);
            timeDepartureSecondOld = noEmptyArr[6].slice(2, 4);
            timeDeparture =
                timeDepartureFirstOld + ':' + timeDepartureSecondOld;

            timeArrivedFirstOld = noEmptyArr[7].slice(0, 2);
            timeArrivedSecondOld = noEmptyArr[7].slice(2, 4);
            timeArrived = timeArrivedFirstOld + ':' + timeArrivedSecondOld;
        } else if (noEmptyArr.length == 25 && noEmptyArr[7].length == 4) {
            timeDepartureFirstOld = noEmptyArr[9].slice(0, 2);
            timeDepartureSecondOld = noEmptyArr[9].slice(2, 4);
            timeDeparture =
                timeDepartureFirstOld + ':' + timeDepartureSecondOld;

            timeArrivedFirstOld = noEmptyArr[10].slice(0, 2);
            timeArrivedSecondOld = noEmptyArr[10].slice(2, 4);
            timeArrived = timeArrivedFirstOld + ':' + timeArrivedSecondOld;
        } else if (noEmptyArr.length == 10 && noEmptyArr[7].length == 4) {
            timeDepartureFirstOld = noEmptyArr[8].slice(0, 2);
            timeDepartureSecondOld = noEmptyArr[8].slice(2, 4);
            timeDeparture =
                timeDepartureFirstOld + ':' + timeDepartureSecondOld;

            timeArrivedFirstOld = noEmptyArr[9].slice(0, 2);
            timeArrivedSecondOld = noEmptyArr[9].slice(2, 4);
            timeArrived = timeArrivedFirstOld + ':' + timeArrivedSecondOld;
        } else if (noEmptyArr[0].length == 2) {
            timeDepartureFirstOld = noEmptyArr[7].slice(0, 2);
            timeDepartureSecondOld = noEmptyArr[7].slice(2, 4);
            timeDeparture =
                timeDepartureFirstOld + ':' + timeDepartureSecondOld;

            timeArrivedFirstOld = noEmptyArr[8].slice(0, 2);
            timeArrivedSecondOld = noEmptyArr[8].slice(2, 4);
            timeArrived = timeArrivedFirstOld + ':' + timeArrivedSecondOld;
        }
    }

    let departureCountry;
    let departureAirport;
    let arrivedCountry;
    let arrivedAirport;
    if (dataJson) {
        departureCountry = dataJson[departure]['Country'];
        departureAirport = dataJson[departure]['City/Airport'];
        arrivedCountry = dataJson[arrived]['Country'];
        arrivedAirport = dataJson[arrived]['City/Airport'];
    } else {
        console.log('error');
    }
    console.log(
        `${date}.,${timeDeparture} - ${timeArrived}, ${departureCountry} (${departureAirport}) - ${arrivedCountry} (${arrivedAirport}), ${aviaCompany}`
    );
    resultArray.push(
        `${date}.,${timeDeparture} - ${timeArrived}, ${departureCountry} (${departureAirport}) - ${arrivedCountry} (${arrivedAirport}), ${aviaCompany}`
    );
    console.log(resultArray);
    resultMessage(resultArray);
    // document.querySelector('.form-control').value = '';
}

document.querySelector('.success').addEventListener('click', function () {
    const pnr_text = pnrText();
    // console.log(pnr_text);
    const arrayPNR = pnr_text.split(/\n\s*/);
    // console.log(arrayPNR);
    // зробити if якщо текст який прийщов буде рівний pnr_text.split(/\n\s*/); то використовувати для всіх, інакще для одної строчки
    // let resultArray = [];
    for (let i = 0; i <= arrayPNR.length - 2; i++) {
        if (i === 0) {
            let EmptyArr = arrayPNR[i].split(' ');
            const noEmptyArr = EmptyArr.filter(str => str !== '');
            // console.log(noEmptyArr);
            // const str = noEmptyArr.join(' ');
            // console.log(str);
            console.log();
            mainFunc(noEmptyArr);
            // ось тут визвати функція який обробляє дані та вивводить їх
        } else if (i % 3 === 0) {
            let EmptyArr = arrayPNR[i].replace(/^\d+\s*/, '').split(' ');
            const noEmptyArr = EmptyArr.filter(str => str !== '');
            // ось тут визвати функція який обробляє дані та вивводить їх
            // console.log(noEmptyArr);
            mainFunc(noEmptyArr);
        }
    }

    document.querySelector('.form-control').value = '';
});

document.querySelector('.again').addEventListener('click', function () {
    location.reload();
});
