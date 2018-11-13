$(function () {

// Create array from 1000 to 10000 value
    var randOrderSum = [1000, 1500, 2000, 2500, 3000, 3250, 3500, 3750, 4000, 4350, 4500, 4800, 5000, 5200, 5500, 5700, 6000, 6300, 6500, 6900, 7000, 7500, 7200, 8000, 8500, 8700, 9000, 9300, 9500, 10000];

// Create array city
    var cityList = ['Александрия', 'Белая Церковь', 'Винница', 'Вишневое', 'Днепро', 'Дрогобыч', 'Житомир', 'Запорожье', 'Знаменка', 'Золотоноша', 'Киев', 'Кропивницкий', 'Конотоп', 'Кривой Рог', 'Львов', 'Ровно', 'Славутич', 'Смела', 'Сумы', 'Харьков', 'Червоноград', 'Черкасы', 'Чернигов', 'Шостка'];

    var imgPathMan = ['img/man1.png', 'img/man2.png', 'img/man3.png', 'img/man4.png', 'img/man5.png', 'img/man6.png', 'img/man7.png', 'img/man8.png'];

    var imgPathWoman = ['img/woman1.png', 'img/woman2.png', 'img/woman3.png', 'img/woman4.png', 'img/woman5.png', 'img/woman6.png', 'img/woman7.png', 'img/woman8.png'];

    var actionVerb = ['сделал','оставил', 'оформил', 'совершил', 'забронировал'];



    // Create list object in array people

    var people = [{

        "fname": "Иноземцева Надежда",
        "sex": 0

    }, {

        "fname": "Ярцева Аня",
        "sex": 0

    }, {

        "fname": "Наталья Мальцова",
        "sex": 0

    }, {

        "fname": "Марина Губачева",
        "sex": 0

    }, {

        "fname": "Стаина Анна",
        "sex": 0

    }, {

        "fname": "Шеркова Евгения",
        "sex": 0

    }, {

        "fname": "Андрюхина Нина",
        "sex": 0

    }, {

        "fname": "Головина Анна",
        "sex": 0

    }, {

        "fname": "Чупрова Екатерина",
        "sex": 0

    }, {

        "fname": "Холопова Виктория",
        "sex": 0

    }, {

        "fname": "Крупина Мария",
        "sex": 0

    }, {

        "fname": "Полевщикова Кристина",
        "sex": 0

    }, {

        "fname": "Пьянкова Диана",
        "sex": 0

    }, {

        "fname": "Буланова Яна",
        "sex": 0

    }, {

        "fname": "Щеголева Светлана",
        "sex": 0

    }, {

        "fname": "Янкелевич Алина",
        "sex": 0

    }, {

        "fname": "Якушевич Наталья",
        "sex": 0

    }, {

        "fname": "Фомичева Диана",
        "sex": 0

    }, {

        "fname": "Пережогина Виктория",
        "sex": 0

    }, {

        "fname": "Рябова Дарья",
        "sex": 0

    }, {

        "fname": "Домышева Юлия",
        "sex": 0

    }, {

        "fname": "Милова Татьяна",
        "sex": 0

    }, {

        "fname": "Шипицына Анна",
        "sex": 0

    }, {

        "fname": "Протасова Евгения",
        "sex": 0

    }, {

        "fname": "Коржева Ксения",
        "sex": 0

    }, {

        "fname": "Кузнецова Вероника",
        "sex": 0

    }, {

        "fname": "Сурина Алиса",
        "sex": 0

    }, {

        "fname": "Перова Агата",
        "sex": 0

    }, {

        "fname": "Коржакова Ольга",
        "sex": 0

    }, {

        "fname": "Абрамович Валентина",
        "sex": 0

    }, {

        "fname": "Крылова Наталья",
        "sex": 0

    }, {

        "fname": "Проскуркина Александра",
        "sex": 0

    }, {

        "fname": "Терехова Юлия",
        "sex": 0

    }, {

        "fname": "Труфанова Варвара",
        "sex": 0

    }, {

        "fname": "Батурина Марина",
        "sex": 0

    }, {

        "fname": "Васнецова Нина",
        "sex": 0

    }, {

        "fname": "Перевалова Надежда",
        "sex": 0

    }, {

        "fname": "Рошета Любовь",
        "sex": 0

    }, {

        "fname": "Мосякова Татьяна",
        "sex": 0

    }, {

        "fname": "Носова Анастасия",
        "sex": 0

    }, {

        "fname": "Типалова Юнона",
        "sex": 0

    }, {

        "fname": "Колесникова Инесса",
        "sex": 0

    }, {

        "fname": "Якуничева Анна",
        "sex": 0

    }, {

        "fname": "Левина Евгения",
        "sex": 0

    }, {

        "fname": "Дурмина Антонина",
        "sex": 0

    }, {

        "fname": "Игошина Мария",
        "sex": 0

    }, {

        "fname": "Званцова Светлана",
        "sex": 0

    }, {

        "fname": "Хлопонина Елена",
        "sex": 0

    }, {

        "fname": "Суботина Изабелла",
        "sex": 0

    }, {

        "fname": "Дроздова Марфа",
        "sex": 0

    }, {

        "fname": "Милютина Изабелла",
        "sex": 0

    }, {

        "fname": "Домаш Вячеслав",
        "sex": 1

    }, {

        "fname": "Лагутов Руслан",
        "sex": 1

    }, {

        "fname": "Степанков Радислав",
        "sex": 1

    }, {

        "fname": "Перешивкин Ростислав",
        "sex": 1

    }, {

        "fname": "Кобзев Платон",
        "sex": 1

    }, {

        "fname": "Кабанов Игнатий",
        "sex": 1

    }, {

        "fname": "Чепурин Николай",
        "sex": 1

    }, {

        "fname": "Крымов Изяслав",
        "sex": 1

    }, {

        "fname": "Собчак Евгений",
        "sex": 1

    }, {

        "fname": "Былинкин Максим",
        "sex": 1

    }, {

        "fname": "Архипов Сергей",
        "sex": 1

    }, {

        "fname": "Донцов Самсон",
        "sex": 1

    }, {

        "fname": "Лызлов Владислав",
        "sex": 1

    }, {

        "fname": "Фризов Владимир",
        "sex": 1

    }, {

        "fname": "Крупнов Дмитрий",
        "sex": 1

    }, {

        "fname": "Ябловский Вадим",
        "sex": 1

    }, {

        "fname": "Гусенков Самсон",
        "sex": 1

    }, {

        "fname": "Панфёров Семён",
        "sex": 1

    }, {

        "fname": "Ясинский Павел",
        "sex": 1

    }, {

        "fname": "Тетерев Глеб",
        "sex": 1

    }, {

        "fname": "Шлыков Николай",
        "sex": 1

    }, {

        "fname": "Козлов Илья",
        "sex": 1

    }, {

        "fname": "Паулкин Ефим",
        "sex": 1

    }, {

        "fname": "Саламатов Николай",
        "sex": 1

    }, {

        "fname": "Сподарев Степан",
        "sex": 1

    }, {

        "fname": "Бочкарёв Владимир",
        "sex": 1

    }, {

        "fname": "Опекунов Вячеслав",
        "sex": 1

    }, {

        "fname": "Телицын Тимофей",
        "sex": 1

    }, {

        "fname": "Ямлиханов Андрей",
        "sex": 1

    }, {

        "fname": "Малиновский Владислав",
        "sex": 1

    }, {

        "fname": "Гребнев Ростислав",
        "sex": 1

    }, {

        "fname": "Кузанов Леонид",
        "sex": 1

    }, {

        "fname": "Цитников Всеволод",
        "sex": 1

    }, {

        "fname": "Банин Александр",
        "sex": 1

    }, {

        "fname": "Капица Кирилл",
        "sex": 1

    }, {

        "fname": "Володин Зиновий",
        "sex": 1

    }, {

        "fname": "Уланов Иван",
        "sex": 1

    }, {

        "fname": "Седых Кирилл",
        "sex": 1

    }, {

        "fname": "Туровский Лев",
        "sex": 1

    }, {

        "fname": "Москвин Артем",
        "sex": 1

    }, {

        "fname": "Цыганов Егор",
        "sex": 1

    }, {

        "fname": "Голумбовский Дмитрий",
        "sex": 1

    }, {

        "fname": "Аничков Кирилл",
        "sex": 1

    }, {

        "fname": "Канаш Степан",
        "sex": 1

    }, {

        "fname": "Клепахов Дмитрий",
        "sex": 1

    }, {

        "fname": "Колесников Анатолий",
        "sex": 1

    }, {

        "fname": "Цветков Леонид",
        "sex": 1

    }, {

        "fname": "Мишин Ефим",
        "sex": 1

    }, {

        "fname": "Кирилл Ловец",
        "sex": 1

    }, {

        "fname": "Евгений Кукарин",
        "sex": 1

    }, {

        "fname": "Сергей Прохоров",
        "sex": 1

    }, {

        "fname": "Андрей Князев",
        "sex": 1

    }, {

        "fname": "Михаил Павленко",
        "sex": 1

    }, {

        "fname": "Виктор Бодров",
        "sex": 1

    }, {

        "fname": "Алексей Комаров",
        "sex": 1

    }, {

        "fname": "Дмитрий Маслов",
        "sex": 1

    }, {

        "fname": "Борисов Евгений",
        "sex": 1

    }];


// shuffle Arrays
    function shuffleArray(array) {

        var currentIndex = array.length, temporaryValue, randomIndex;


        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);

            currentIndex -= 1;

            temporaryValue = array[currentIndex];

            array[currentIndex] = array[randomIndex];

            array[randomIndex] = temporaryValue;

        }


        return array;

    }


    function showTips() {


        this.showItem = 0;

        people = shuffleArray(people);

        cityList = shuffleArray(cityList);

        randOrderSum = shuffleArray(randOrderSum);

        imgPathWoman = shuffleArray(imgPathWoman);

        imgPathMan = shuffleArray(imgPathMan);

        imgPathMan = shuffleArray(imgPathMan);

        actionVerb = shuffleArray(actionVerb);



        // output HTML
        this.generateHTML = function (fname, avatar, sex, city, phrasex, randOrderSum) {


            // Function rand opacity background depending on people

            function randomOpacity (min, max) {
                return (Math.random() + 0.1 * (max - min) + min).toFixed(1);
            }



            if (sex == 0) {

                var classSex = 'woman-item';

                var bgrand = 'style="background: rgba(255,222,38,' + randomOpacity(0.4, 1) + ');"';

            } else {

                var classSex = 'man-item';

                var bgrand = 'style="background: rgba(57,199,255,' + randomOpacity(0.4, 1) + ');"';

            }

            return (



                '<div '  + bgrand + ' class="popnotice-item ' + classSex + '">' +

                '<img src="' + avatar + '" class="popnotice-img">' +

                '<div class="popnotice-description">' +


                '<div class="popnotice-text"><h3>' + fname +'</h3>'+ 'г. ' + city + ', '  + phrasex + '</div>' +


                '</div>' +

                '</div>'


            );

        };

        // output popnotice item to DOM wit animation
        this.addItem = function (html) {


            $(html).appendTo($(document.body));

            $('.popnotice-item').css('display', 'block').animate({opacity: 1.0}, 'slow');
        }

        // disappear popnotice item to DOM wit animation
        this.bindEvent = function () {

            setTimeout(function () {

                $('.popnotice-item').animate({opacity: 0.1}, 'slow',

                    function () {

                        $('.popnotice-item').css('display', 'none').remove();

                    });

            }, 8000);

        }


        var self = this;

        // Loop popnotice item and valiadation shuffle variable from array
        var item = people[self.showItem];

        if (!item) {

            self.showItem = -1;

            var item = people[0];


        }

        var imgWoman = imgPathWoman[self.showItem];

        if (!imgWoman) {

            self.showItem = -1;

            var imgWoman = imgPathWoman[0];

        }

        var imgMan = imgPathMan[self.showItem];

        if (!imgMan) {

            self.showItem = -1;

            var imgMan = imgPathMan[0];

        }

        // img-icon path depending on the sex
        var avatar = item.sex ? imgMan : imgWoman;

        var city = cityList[self.showItem];

        if (!city) {

            self.showItem = -1;

            var city = cityList[0];

        }

        var sum = randOrderSum[self.showItem];

        if (!sum) {

            self.showItem = -1;

            var sum = randOrderSum[0];

        }

// Verb and Noun validate and output random phrase depending on the selected verb

        var aVerb = actionVerb[self.showItem];

        if (!actionVerb) {

            self.showItem = -1;

            var aVerb = actionVerb[0];

        }


        if(aVerb == 'сделал'){

            var actionNoun = ['заказ', 'заявку на обратный звонок', 'регистрацию на сайте', 'предзаказ товара'];

            actionNoun = shuffleArray(actionNoun);

            var aNoun = actionNoun[self.showItem];

            if (!actionNoun) {

                self.showItem = -1;

                var aNoun = actionNoun[0];

            }

        }else if(aVerb == 'оформил'){

            var actionNoun = ['заказ', 'заявку на обратный звонок', 'регистрацию на сайте', 'предзаказ товара'];

            actionNoun = shuffleArray(actionNoun);

            var aNoun = actionNoun[self.showItem];

            if (!actionNoun) {

                self.showItem = -1;

                var aNoun = actionNoun[0];
            }

        }else if(aVerb == 'совершил'){

            var actionNoun = ['покупку', 'заказ', 'регистрацию на сайте', 'предзаказ товара'];

            actionNoun = shuffleArray(actionNoun);

            var aNoun = actionNoun[self.showItem];

            if (!actionNoun) {

                self.showItem = -1;

                var aNoun = actionNoun[0];
            }

        }else if(aVerb == 'забронировал'){

        var actionNoun = ['товар'];

        actionNoun = shuffleArray(actionNoun);

        var aNoun = actionNoun[self.showItem];

        if (!actionNoun) {

            self.showItem = -1;

            var aNoun = actionNoun[0];
        }

        }else if(aVerb == 'оставил'){

            var actionNoun = ['заявку на обратный звонок'];

            actionNoun = shuffleArray(actionNoun);

            var aNoun = actionNoun[self.showItem];

            if (!actionNoun) {

                self.showItem = -1;

                var aNoun = actionNoun[0];
            }

        }else{
            var actionNoun = ['заказ', 'заявку на обратный звонок', 'регистрацию на сайте', 'предзаказ товара'];

            actionNoun = shuffleArray(actionNoun);

            var aNoun = actionNoun[self.showItem];

            if (!actionNoun) {

                self.showItem = -1;

                var aNoun = actionNoun[0];

            }
        }



        // function output verb depending on the sex people and price goods depending on the action noun

        this.nounSum = function (aNoun){
            if(aNoun == 'покупку' || aNoun == 'заказ' || aNoun == 'предзаказ товара' || aNoun == 'товар'){

                return phrasex  = item.sex ? aVerb + ' ' + aNoun + ' на сумму ' + sum + ' грн.' : aVerb + 'а ' + aNoun + ' на сумму ' + sum + ' грн.';

            }else{

                return phrasex  = item.sex ? aVerb + ' ' + aNoun : aVerb + 'а ' + aNoun ;

            }
        };

        self.nounSum(aNoun);



        // Count popnotice item loop

        self.showItem++;

        // Output generation HTML code with passing an argument popnotice item to a function
        var html = self.generateHTML(item.fname, avatar, item.sex, city, phrasex);

        // Call appear and disappear function
        self.addItem(html);

        self.bindEvent();
    }

    // Interval between show popnotice item
    //showTips();
    setInterval(showTips, 5000);

});