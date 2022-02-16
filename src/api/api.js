
const LongData = [
    {
        id: 1, date: '04/09/20', type: 'город', src: ['https://sun9-78.userapi.com/impg/UJ1cbLHnaGi_94Dt0cT1D3pTO9gfB4K8FgenHw/dX7tBx9b5eI.jpg?size=1565x1037&quality=96&sign=752345833084585f4b45a1be5ba4d4b2&type=album',
            'https://sun9-16.userapi.com/impg/c853524/v853524362/217c29/x5yQBJXner0.jpg?size=1920x1080&quality=96&sign=2ddde97934284a65f3ce16ec9510509b&type=album',
            'https://sun9-51.userapi.com/impg/wDCAwOsdq5b5Heow2HaW4NNnwWFMFW9TBvbfhQ/YMN3BWQOynI.jpg?size=1440x1078&quality=96&sign=98801d9434c9ca7c1669351852fdd312&type=album'],
        description: "одни из фотографий, сделанных на пленку", memoryLocation: "LongMemory", rating: 5
    },
    {
        id: 2, date: '23/05/14', type: 'сопка', src: ['https://sun9-21.userapi.com/impf/cYNA2bhg4WHE023w1WVpXiqs_bjYVFsQGQ_HDQ/cRNZPfMrMvo.jpg?size=2048x2048&quality=96&sign=95e317d86bbf8aacc0690e6f33e70fbf&type=album'],
        description: "", memoryLocation: "LongMemory", rating: 1
    },
    {
        id: 3, date: '15/09/15', type: 'школа', src: ['https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'],
        description: "", memoryLocation: "LongMemory", rating: 1
    },
    {
        id: 4, date: '09/03/16', type: 'море', src: ['https://sun9-13.userapi.com/impf/c629121/v629121267/3ddb6/h4xT1cyC2as.jpg?size=1280x852&quality=96&sign=ed33fca4d1db34fc0af426203075d50b&type=album'],
        description: "", memoryLocation: "LongMemory", rating: 1
    },
    {
        id: 5, date: '04/09/20', type: 'город', src: ['https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'],
        description: "довольные пацаны с курилки", memoryLocation: "LongMemory", rating: 6
    },
];

const ShortData = [
    {
        id: 6, date: '04/09/20', type: 'город', src: ['https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'],
        description: "пацаны", memoryLocation: "ShortMemory", rating: 10
    },
];

const FearsData = [
    {
        id: 1, date: '01/02/21', type: 'полиция', src: ['https://www.hrw.org/sites/default/files/styles/embed_small/public/multimedia_images_2017/201707eca_riot_police_3.jpg?itok=r3lAe0uC'],
        description: "жестокие задержания мирных граждан"
    },
];

const AuthData = [
    {
        login: "happiness",
        pass: "gogogo"
    },
    {
        login: "sadness",
        pass: "lololo"
    },
    {
        login: "fear",
        pass: "fear"
    }
];

window.LongData = LongData;
window.ShortData = ShortData;

export const AuthAPI = {
    getUser(login, pass) {
        let arr = [];
        for (let i = 0; i < AuthData.length; i++) {
            let masLong = Object.values(AuthData[i])
            if (masLong[0] === login && masLong[1] === pass) arr.push(AuthData[i]);
        }
        return arr;
    }
}

export const ProjectionAPI = {
    getMemoryData(formData) {
        let arr = [];
        for (let i = 0; i < LongData.length; i++) {
            let masLong = Object.values(LongData[i])
            if (masLong[1] === formData.dateMemory && masLong[2] === formData.typeMemory.toLowerCase()) arr.push(LongData[i]);
        }
        for (let i = 0; i < ShortData.length; i++) {
            let masShort = Object.values(ShortData[i])
            if (masShort[1] === formData.dateMemory && masShort[2] === formData.typeMemory.toLowerCase()) arr.push(ShortData[i]);
        }
        return arr;
    },
    saveMemory(saveFormData) {
        LongData.push({
            id: 5,
            date: saveFormData.date,
            type: saveFormData.type.toLowerCase(),
            src: saveFormData.src,
            description: saveFormData.desc,
            memoryLocation: "долговременная память",
            rating: saveFormData.rating
        });
        return {resultCode: 0};
    },
    getSortMemoriesData(sortFormData) {
        console.log(sortFormData);
    },
    transportMemoryData(memory){
        console.log(memory);
        //alert('transport');
        return {resultCode: 0};
    }
}

export const DreamsApi = {
    generationDream(formData) {
        console.log(formData);
    }
}

export const FearsApi = {
    countFears(){
        console.log('get count');
    },
    getFearData(searchFormData){
        let arrFear = [];
        for (let i = 0; i < FearsData.length; i++) {
            let masLong = Object.values(FearsData[i]);
            if (masLong[1] === searchFormData.dateMemory && masLong[2] === searchFormData.typeMemory.toLowerCase()) arrFear.push(FearsData[i]);
        }
        return arrFear;
    },
    saveFearData(fear){
        console.log('save', fear);
    }
}

export const AuthApi = {
    getEmotion() {
        console.log("getEmotion");
    },
    authUser() {
        console.log("get auth/me");
    },
    logIn(email, password) {
        console.log("post logIn");
    },
    logOut() {                                                                 
        console.log("delete logIn");
    }
}

export const IslandsApi = {
    getIslands() {
        console.log("getIslands Data");
        return {
            resultCode: 0,
            message:[""],
            data: ["Дом", "Семья", "Работа", "Авто", "Друзья"]
        };
    },
    getListTypes(){
        console.log("getListTypes");
        return {
            resultCode: 0,
            message:[""],
            data: [
                {"Плавание": 123},
                {"Книги": 2},
                {"Музыка": 11},
                {"Готовка": 15},
                {"Фото": 5}
            ]
        };
    },
    pickTypeMemory(type){
        console.log("post TypeMemory", type[0]);
        return {
            resultCode: 0,
            message:[""],
        }
    }
}

export const ReactionApi = {
    getReactionData(){
        console.log("get reactionData");
    },
    actionReaction(){
        console.log("post reaction");
    }
}