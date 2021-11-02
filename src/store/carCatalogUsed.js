export default ({
    state: {
        usedAuto: [
            {
                title: 'Дивитись всі марки',
            },
            {
                title: 'Дивитись всі роки',
            },
            {
                title: 'Каталог легковиків',
            },
            {
                title: 'Каталог мото',
            },
            {
                title: 'Каталог водного',
            },
            {
                title: 'Каталог сільгосптехніки',
            },
            {
                title: 'Каталог спецтехніки',
            },
            {
                title: 'Каталог автобусів',
            },
            {
                title: 'Каталог грузовиків',
            },
            {
                title: 'Каталог причепів',
            },
            {
                title: 'Каталог автобудинків',
            },
            {
                title: 'Каталог повітряного',
            },

        ],
        News: [
            {
                text: "Акції",
                amount: 14730
            },
            {
                text: "Автомобілі",
                amount: 4949
            },
            {
                text: "Події",
                amount: 4770
            },
            {
                text: "Автозакон",
                amount: 965
            }
        ],
        region: [
            "Нові авто в Вінниці",
            "Нові авто в Дніпрі",
            "Нові авто в Донецьку",
            "Нові авто в Житомирі",
            "Нові авто в Запоріжжі",
            "Нові авто в Івано-Франківську",
            "Нові авто в Києві",
            "Нові авто в Кропивницькому",
            "Нові авто в Луцьку",
            "Нові авто в Львові",
            "Нові авто в Миколаєві",
            "Нові авто в Одесі",
            "Нові авто в Полтаві",
            "Нові авто в Рівному",
            "Нові авто в Сумах",
            "Нові авто в Тернополі",
            "Нові авто в Ужгороді",
            "Нові авто в Харкові",
            "Нові авто в Херсоні",
            "Нові авто в Хмельницькому",
            "Нові авто в Черкасах",
            "Нові авто в Чернівцях",
            "Нові авто в Чернігові"
        ],
        type: [
            "Нові Ізотермічні",
            "Нові Кабріолети",
            "Нові Кросовери",
            "Нові Купе",
            "Нові Ліфтбеки",
            "Нові Мікроавтобуси",
            "Нові Мікровени",
            "Нові Мінівени",
            "Нові Пікапи",
            "Нові Позашляховики",
            "Нові Родстери",
            "Нові Седани",
            "Нові Універсали",
            "Нові Фастбеки",
            "Нові Фургони",
            "Нові Хетчбеки",
            "Нові Автоевакуатори",
            "Нові Борти",
            "Нові Борт-тенти",
            "Нові Вакуумні машини",
            "Нові Комунальна техніка",
            "Нові Паливозаправники",
            "Нові Промтоварні",
            "Нові Самоскиди",
            "Нові Термічні",
            "Нові Хлібні"
        ],
        popular: [
            "Авто для заміських поїздок",
            "Авто бізнес-класу",
            "Cімейний автомобіль",
            "Економічні авто",
            "Комерційне авто",
            "Авто для відпочинку",
            "Спортивні автомобілі",
            "Авто для подорожей",
            "Нові авто з АКПП",
            "Нові китайські авто",
            "Нові авто з Німеччини",
            "Нові російські авто",
            "Нові американські авто",
            "Нові авто в кредит",
            "Електромобілі із Китаю"
        ],
        year: [
            "2022 року випуску",
            "2021 року випуску",
            "2020 року випуску",
            "2019 року випуску",
            "2018 року випуску",
            "2017 року випуску",
            "2016 року випуску",
            "2015 року випуску",
            "2014 року випуску",
            "2013 року випуску",
            "2012 року випуску",
        ],
        price: [
            "до 10 000 $",
            "до 15 000 $",
            "до 20 000 $",
            "до 25 000 $",
            "до 30 000 $",
            "до 35 000 $",
            "до 40 000 $",
            "до 150.000 грн",
            "150.000 грн - 300.000 грн",
            "300.000 грн - 400.000 грн",
            "400.000 грн - 600.000 грн",
            "600.000 грн - 750.000 грн",
            "750.000 грн - 1.000.000 грн",
            "1.000.000 грн - 1.250.000 грн",
            "1.250.000 грн - 1.500.000 грн",
            "1.500.000 грн - 1.750.000 грн",
            "1.750.000 грн - 2.000.000 грн",
            "дорожче 2.000.000 грн"
        ],
        typePetrol: [
            "Нові бензинові авто",
            "Нові Газ/Бензин автомобілі",
            "Гібридні авто від автосалонів",
            "Нові авто на газу",
            "Нові дизельні авто",
            "Нові електрокари",
            "Нові гібридні автомобілі"
        ],
        allBrands: [
            "Нові Volvo",
            "Нові Land Rover",
            "Нові Lifan",
            "Нові Jeep",
            "Нові Jaguar",
            "Нові Alfa Romeo",
            "Нові Porsche",
            "Нові ГАЗ",
            "Нові УАЗ",
            "Нові FAW",
            "Нові Infiniti",
            "Нові JAC",
            "Нові Yamaha",
            "Нові Maserati"
        ]

    },
    getters: {
        CarCatalogNewAuto(state) {
            return state.autoNew
        },
        CarCatalogNewNews(state) {
            return state.News
        },
        CarCatalogNewRegion(state) {
            return state.region
        },
        CarCatalogNewType(state) {
            return state.type
        },
        CarCatalogNewPopular(state) {
            return state.popular
        },
        CarCatalogNewYear(state) {
            return state.year
        },
        CarCatalogNewPrice(state) {
            return state.price
        },
        CarCatalogNewTypePetrol(state) {
            return state.typePetrol
        },
        CarCatalogNewAllBrands(state) {
            return state.allBrands
        },
    },
})
