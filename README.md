# AviationFly

> Даний проект знаходиться на етапі розробки і буде доповнюватися <br>
> та видозмінюватися для покращення юзабіліті користувача

> Одна з перших задач вдосконадлення це додання до виводу
> таких елментів як: Ціна, Ручний багаж, Багаж та можливість вносити
> та копіювати ці дані разом з маршрутом перельоту

### Робоча версія проекту

[Проект] (https://github.com/jonnytaddesky/AviationFly)

## Version 1.0

Даний додаток створений для перетворення маршрутів перельоту з системи Amadeus в <br>
більш зручний для читання звичайним людям.

## При розробці даного додатку я

### використовував наступні інструменти:

-   Visual Studio Code
-   Google Chrome

### мови програмування та розмітки web-сторінок:

-   JavaScript
-   HTML/CSS
-   Bootstrap

### бібліотеки JS:

-   live-server (для швидкого оновлення сторінки)

### для доступу до файлу з даними IATCode:

-   jQuery
-   Json

### За допомогою інструменту нижче витягнув з сайту IATCode усіх аеропортів світу

-   Microsoft PowerBI

## Приклади коду з системи Amadeus, який зчитує дана програма:

### Приклади коду з системи Amadeus

```
BA 847 J 25MAR 6 WAWLHR HK1          1250 1440   319 E 0 M
     SEE RTSVC
```

### Результат виконання програми

> 25MAR.,12:50 - 14:40, Poland (Warsaw - Frédéric Chopin) - United Kingdom (London - Heathrow), BA 847

### Приклади коду з системи Amadeus

```
LO 281 C 25MAR 6 WAWLHR HK1          0735 0935   7M8 E 0 M
     PSGR CONTACT INFORMATION REQUIRED
     SEE RTSVC
```

### Результат виконання програми

> 25MAR.,07:35 - 09:35, Poland (Warsaw - Frédéric Chopin) - United Kingdom (London - Heathrow), LO 281

### Приклади коду з системи Amadeus

```
BA 847 J 25MAR 6 WAWLHR HK1          1250 1440   319 E 0 M
     SEE RTSVC
  2  BA 269 J 25MAR 6 LHRLAX HK1       5  1545 2005   388 E 0 M
     SEE RTSVC
  3  LO 024 C 30MAR 4 LAXWAW HK1       B  2205 1840+1 788 E 0 DB
```

### Результат виконання програми

> 25MAR.,12:50 - 14:40, Poland (Warsaw - Frédéric Chopin) - United Kingdom (London - Heathrow), BA 847
> 25MAR.,15:45 - 20:05, United Kingdom (London - Heathrow) - USA (Los Angeles (CA) - International), BA 269
> 30MAR.,22:05 - 18:40, USA (Los Angeles (CA) - International) - Poland (Warsaw - Frédéric Chopin), LO 024

### Приклади коду з системи Amadeus

```
OS 625 J 25MAR 6 VIEWAW HK1  0745 3  0815 0930   E95 E 0 M
     PLS ADD PAX MOBILE CTC FOR IRREG COMMUNICATION
     SEE RTSVC
LO 281 C 25MAR 6 WAWLHR HK1          0735 0935   7M8 E 0 M
     PSGR CONTACT INFORMATION REQUIRED
     SEE RTSVC
```

### Результат виконання програми

> 25MAR.,08:15 - 09:30, Austria (Wien (Vienna) - Vienna International) - Poland (Warsaw - Frédéric Chopin), OS 625
> 25MAR.,07:35 - 09:35, Poland (Warsaw - Frédéric Chopin) - United Kingdom (London - Heathrow), LO 281

### Приклади коду з системи Amadeus

```
BA 847 J 25MAR 6 WAWLHR HK1          1250 1440   319 E 0 M
     SEE RTSVC
  2  BA 269 J 25MAR 6 LHRLAX HK1       5  1545 2005   388 E 0 M
     SEE RTSVC
  3  LO 024 C 30MAR 4 LAXWAW HK1       B  2205 1840+1 788 E 0 DB
OS 625 J 25MAR 6 VIEWAW HK1  0745 3  0815 0930   E95 E 0 M
     PLS ADD PAX MOBILE CTC FOR IRREG COMMUNICATION
     SEE RTSVC
LO 281 C 25MAR 6 WAWLHR HK1          0735 0935   7M8 E 0 M
     PSGR CONTACT INFORMATION REQUIRED
     SEE RTSVC
```

### Результат виконання програми

> 25MAR.,12:50 - 14:40, Poland (Warsaw - Frédéric Chopin) - United Kingdom (London - Heathrow), BA 847
> 25MAR.,15:45 - 20:05, United Kingdom (London - Heathrow) - USA (Los Angeles (CA) - International), BA 269
> 30MAR.,22:05 - 18:40, USA (Los Angeles (CA) - International) - Poland (Warsaw - Frédéric Chopin), LO 024
> 25MAR.,08:15 - 09:30, Austria (Wien (Vienna) - Vienna International) - Poland (Warsaw - Frédéric Chopin), OS 625
> 25MAR.,07:35 - 09:35, Poland (Warsaw - Frédéric Chopin) - United Kingdom (London - Heathrow), LO 281

## Скріншот головного вікна програми:

![](https://github.com/jonnytaddesky/AviationFly/blob/main/Screenshot/mainPage.png)

## Скріншот виконання програми програми:

![](https://github.com/jonnytaddesky/AviationFly/blob/main/Screenshot/workScript.png)

## Також даний додаток працює і на мобільних пристроях

![](https://github.com/jonnytaddesky/AviationFly/blob/main/Screenshot/mobileApp.jpg)
