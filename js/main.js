$(function() {

// Create array from 1000 to 10000 value
var randSum = [1000, 1500, 2000, 2500, 3000, 3250, 3500, 3750, 4000, 4350, 4500, 4800, 5000, 5200, 5500, 5700, 6000, 6300, 6500, 6900, 7000, 7500, 7200, 8000, 8500, 8700, 9000, 9300, 9500, 10000];

// Create array city
var cityList = ['Александрия', 'Белая Церковь', 'Винница', 'Вишневое', 'Днепропетровск', 'Дрогобыч', 'Житомир', 'Запорожье', 'Знаменка', 'Золотоноша', 'Киев', 'Кировоград', 'Конотоп', 'Кривой Рог', 'Львов', 'Ровно', 'Славутич', 'Смела', 'Сумы', 'Харьков', 'Червоноград', 'Черкасы', 'Чернигов', 'Шостка'];

// Create list object in array people

var people = [{

    "fname": "Иноземцева Надежда",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Ярцева Аня",

    "avatar": "img/woman-icon.png",

    "sex": 0

},  {

    "fname": "Наталья Мальцова",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Марина Губачева",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Стаина Анна",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Шеркова Евгения",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Андрюхина Нина",

    "avatar": "img/woman-icon.png",

    "sex": 0

},  {

    "fname": "Головина Анна",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Чупрова Екатерина",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Холопова Виктория",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Крупина Мария",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Полевщикова Кристина",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Пьянкова Диана",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Буланова Яна",

    "avatar": "img/woman-icon.png",

    "sex": 0

},{

    "fname": "Щеголева Светлана",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Янкелевич Алина",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Якушевич Наталья",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Фомичева Диана",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Пережогина Виктория",

    "avatar": "img/woman-icon.png",

    "sex": 0

},  {

    "fname": "Рябова Дарья",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Домышева Юлия",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Милова Татьяна",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Шипицына Анна",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Протасова Евгения",

    "avatar": "img/woman-icon.png",

    "sex": 0

},  {

    "fname": "Коржева Ксения",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Кузнецова Вероника",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Сурина Алиса",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Перова Агата",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Коржакова Ольга",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Абрамович Валентина",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Крылова Наталья",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Проскуркина Александра",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Терехова Юлия",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Труфанова Варвара",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Батурина Марина",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Васнецова Нина",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Перевалова Надежда",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Рошета Любовь",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Мосякова Татьяна",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Носова Анастасия",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Типалова Юнона",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Колесникова Инесса",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Якуничева Анна",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Левина Евгения",

    "avatar": "img/woman-icon.png",

    "sex": 0

},  {

    "fname": "Дурмина Антонина",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Игошина Мария",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Званцова Светлана",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Хлопонина Елена",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Суботина Изабелла",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Дроздова Марфа",

    "avatar": "img/woman-icon.png",

    "sex": 0

}, {

    "fname": "Милютина Изабелла",

    "avatar": "img/woman-icon.png",

    "sex": 0

},  {

    "fname": "Домаш Вячеслав",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Лагутов Руслан",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Степанков Радислав",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Перешивкин Ростислав",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Кобзев Платон",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Кабанов Игнатий",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Чепурин Николай",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Крымов Изяслав",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Собчак Евгений",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Былинкин Максим",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Архипов Сергей",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Донцов Самсон",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Лызлов Владислав",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Фризов Владимир",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Крупнов Дмитрий",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Ябловский Вадим",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Гусенков Самсон",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Панфёров Семён",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Ясинский Павел",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Тетерев Глеб",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Шлыков Николай",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Козлов Илья",

    "avatar": "img/man-icon.png",

    "sex": 1

},  {

    "fname": "Паулкин Ефим",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Саламатов Николай",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Сподарев Степан",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Бочкарёв Владимир",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Опекунов Вячеслав",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Телицын Тимофей",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Ямлиханов Андрей",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Малиновский Владислав",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Гребнев Ростислав",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Кузанов Леонид",

    "avatar": "img/man-icon.png",

    "sex": 1

},  {

    "fname": "Цитников Всеволод",

    "avatar": "img/man-icon.png",

    "sex": 1

},  {

    "fname": "Банин Александр",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Капица Кирилл",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Володин Зиновий",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Уланов Иван",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Седых Кирилл",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Туровский Лев",

    "avatar": "img/man-icon.png",

    "sex": 1

},  {

    "fname": "Москвин Артем",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Цыганов Егор",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Голумбовский Дмитрий",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Аничков Кирилл",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Канаш Степан",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Клепахов Дмитрий",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Колесников Анатолий",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Цветков Леонид",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Мишин Ефим",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Кирилл Ловец",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Евгений Кукарин",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Сергей Прохоров",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Андрей Князев",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Михаил Павленко",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Виктор Бодров",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Алексей Комаров",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Дмитрий Маслов",

    "avatar": "img/man-icon.png",

    "sex": 1

}, {

    "fname": "Борисов Евгений",

    "avatar": "img/man-icon.png",

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

    people = shuffleArray(people);

    cityList  = shuffleArray(cityList);

    randSum = shuffleArray(randSum);


function showTips() {



    this.showItem = 0;

    this.generateHTML = function (fname, avatar) {




        return (



            '<div class="popnotice-item">' +

            '<img src="' + avatar + '" alt="" class="popnotice-img">' +

            '<div class="popnotice-description">' +

            '<div class="popnotice-text">' + fname + '</div>' +

            '</div>' +

            '</div>'


        );

    }


    this.addItem = function (html) {





        $(html).appendTo($(document.body));

        $('.popnotice-item').css('display', 'block');

        $('.popnotice-item').animate({

            opacity: 1.0

        }, 'slow');

    }

    var self = this;
    var item = people[self.showItem];



    if (!item) {

        self.showItem = -1;

        var item = people[0];




    }




    self.showItem++;

    var html = self.generateHTML(item.fname, item.avatar);

    self.addItem(html);

}






showTips();
});