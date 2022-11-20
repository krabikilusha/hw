const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Ева",
            "id_4": "Набива",
            "id_5": "Анастасия",
            "id_6": "Софья",
            "id_7": "Елена",
            "id_8": "Галина",
            "id_9": "Дарья",
            "id_10": "Виктория"
        }
    }`,
    surnameFemaleJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванова",
            "id_2": "Смирнова",
            "id_3": "Кузнецова",
            "id_4": "Васильева",
            "id_5": "Петрова",
            "id_6": "Михайлова",
            "id_7": "Новикова",
            "id_8": "Федорова",
            "id_9": "Кравцова",
            "id_10": "Николаева",
            "id_11": "Семёнова",
            "id_12": "Славина",
            "id_13": "Степанова",
            "id_14": "Павлова",
            "id_15": "Александрова",
            "id_16": "Морозова"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        return this.randomValue(this.firstNameMaleJson)
        if else this.randomValue(this.firstNameFemaleJson);

    },


     randomSurname: function() {

        return this.randomValue(this.surnameJson)
        if else return this.randomValue(this.surnameFemaleJson);

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender(GENDER_MALE, GENDER_FEMALE);
        this.person.firstName = this.randomFirstName();
        return this.person;
    }
};