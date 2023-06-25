
const formattedDateDEOption = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
}
const monthDayNameDEOption = {
    weekday: "long",
    month: "long",
}

let today;

let data = {
    date: {
        twoDigitDate: "",
        dateDeFormat: "",
    },
    monthName: {
        enShort: "",
        deLong: "",
    },
    dayName: {
        enShort: "",
        deLong: ""
    },
    time: {
        hh: "",
        mm: "",
        ss: ""
    },
    year: "" 

};

function getCurrentDate(){
    today = new Date();

    data.date.twoDigitDate = today.toString().split(" ")[2];
    data.date.dateDeFormat = today.toLocaleString("de", formattedDateDEOption);

    data.monthName.enShort = today.toString().split(" ")[1].toUpperCase();
    data.monthName.deLong = today.toLocaleString("de", monthDayNameDEOption).split(" ")[0].toUpperCase();

    data.dayName.enShort = today.toString().split(" ")[0].toUpperCase();
    data.dayName.deLong = today.toLocaleString("de", monthDayNameDEOption).split(" ")[1].toUpperCase();

    data.time.hh = today.toString().split(" ")[4].slice(0, 2);
    data.time.mm = today.toString().split(" ")[4].slice(3, 5);
    data.time.ss = today.toString().split(" ")[4].slice(6, 8);

    data.year = today.toString().split(" ")[3];


    return {...data};

}



export default getCurrentDate;