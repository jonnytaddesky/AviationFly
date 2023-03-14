'use strict';

// let resultArray = [];
// console.log(resultArray);
let dataJson;
// console.log(resultArray);
const pnrText = function () {
    return document.querySelector('.form-control').value;
};

const resultMessage = function (resultArray) {
    const styleCss = document.querySelector('.form-result').style;
    resultArray.forEach(el => {
        let listItem = document.createElement('li');
        listItem.innerText = el;
        document.querySelector('.result').append(listItem);

        styleCss.flex = '1 0 50%';
        styleCss.border = '#fff solid 1px';
        styleCss.marginLeft = '20px';
        styleCss.marginRight = '20px';
        styleCss.marginTop = '10px';
        styleCss.padding = '10px';
        styleCss.borderRadius = '10px';
        styleCss.backgroundColor = '#c0c0c0';
        styleCss.color = 'black';
    });
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
        } else if (noEmptyArr.length == 14) {
            timeDepartureFirstOld = noEmptyArr[8].slice(0, 2);
            timeDepartureSecondOld = noEmptyArr[8].slice(2, 4);
            timeDeparture =
                timeDepartureFirstOld + ':' + timeDepartureSecondOld;

            timeArrivedFirstOld = noEmptyArr[9].slice(0, 2);
            timeArrivedSecondOld = noEmptyArr[9].slice(2, 4);
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
    return `${date}.,${timeDeparture} - ${timeArrived}, ${departureCountry} (${departureAirport}) - ${arrivedCountry} (${arrivedAirport}), ${aviaCompany}`;
}

document.querySelector('.success').addEventListener('click', function () {
    const pnr_text = pnrText();
    // console.log(pnr_text);
    const arrayPNR = pnr_text.split(/\n\s*/);
    // console.log(arrayPNR);
    let resultArray = [];
    // console.log(resultArray);
    for (let i = 0; i < arrayPNR.length; i++) {
        // console.log(arrayPNR[i]);
        const EmptyArr = arrayPNR[i].replace(/^\d+\s*/, '').split(' ');
        console.log(EmptyArr);
        const noEmptyArr = EmptyArr.filter(str => str !== '');
        console.log(noEmptyArr);
        if (noEmptyArr.length > 11) {
            // let resultArray = [];
            const res = mainFunc(noEmptyArr);
            // console.log(res);
            resultArray.push(res);
            console.log(resultArray);
        }
    }
    resultMessage(resultArray);

    document.querySelector('.form-control').value = '';
});

document.querySelector('.again').addEventListener('click', function () {
    location.reload();
});

document.querySelector('.primary').addEventListener('click', function () {
    const myDiv = document.getElementById('myDiv');
    const myLabels = myDiv.querySelectorAll('label');
    const myInputs = myDiv.querySelectorAll('input');

    for (let i = 0; i < myLabels.length; i++) {
        myLabels[i].style.display = 'inline-block';
        myInputs[i].style.display = 'inline-block';
    }

    const range = document.createRange();
    range.selectNode(myDiv);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');

    for (let i = 0; i < myLabels.length; i++) {
        myLabels[i].style.display = '';
        myInputs[i].style.display = '';
    }
    alert('List copied to clipboard');
});
