$(function () {

// Create array from 1000 to 10000 value
    var randSum = [1000, 1500, 2000, 2500, 3000, 3250, 3500, 3750, 4000, 4350, 4500, 4800, 5000, 5200, 5500, 5700, 6000, 6300, 6500, 6900, 7000, 7500, 7200, 8000, 8500, 8700, 9000, 9300, 9500, 10000];

// Create array city
    var cityList = ['Александрия', 'Белая Церковь', 'Винница', 'Вишневое', 'Днепропетровск', 'Дрогобыч', 'Житомир', 'Запорожье', 'Знаменка', 'Золотоноша', 'Киев', 'Кировоград', 'Конотоп', 'Кривой Рог', 'Львов', 'Ровно', 'Славутич', 'Смела', 'Сумы', 'Харьков', 'Червоноград', 'Черкасы', 'Чернигов', 'Шостка'];

    var imgPathMan = ['img/man1.png', 'img/man2.png', 'img/man3.png', 'img/man4.png', 'img/man5.png', 'img/man6.png', 'img/man7.png', 'img/man8.png'];

    var imgPathWoman = ['img/woman1.png', 'img/woman2.png', 'img/woman3.png', 'img/woman4.png', 'img/woman5.png', 'img/woman6.png', 'img/woman7.png', 'img/woman8.png'];

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


// Перемешивание массивов
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

        randSum = shuffleArray(randSum);

        imgPathWoman = shuffleArray(imgPathWoman);

        imgPathMan = shuffleArray(imgPathMan);


        this.generateHTML = function (fname, avatar, sex) {

            if(sex == 0){

                var classSex = 'woman-item';

                var avatar = imgPathWoman;

            }else{

                var classSex = 'man-item';

                var avatar = imgPathMan;

            }

            return (



                '<div class="popnotice-item">' + classSex+ '">' +

                '<img src="' + avatar + '" alt="" class="popnotice-img">' +

                '<div class="popnotice-description">' +

                '<div class="popnotice-text">' + fname + '</div>' +

                '</div>' +

                '</div>'


            );

        }


        this.addItem = function (html) {


            $(html).appendTo($(document.body));

            $('.popnotice-item').css('display', 'block').animate({opacity: 1.0}, 'slow');
        }

        this.bindEvent = function () {

            setTimeout(function () {

                $('.popnotice-item').animate({opacity: 0.1}, 'slow',

                    function () {

                        $('.popnotice-item').css('display', 'none').remove();

                    });

            }, 1000);

        }

        var self = this;
        var item = people[self.showItem];


        if (!item) {

            self.showItem = -1;

            var item = people[0];


        }


        self.showItem++;

        var html = self.generateHTML(item.fname, item.avatar, item.sex);

        self.addItem(html);
        self.bindEvent();
    }


    setInterval(showTips, 10000);


});