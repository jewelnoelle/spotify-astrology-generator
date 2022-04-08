//MONTH VARIABLES;

let jan = 31;
let feb = 28; //should i do 29?
let mar = 31;
let apr = 30;
let may = 31;
let jun = 30;
let jul = 31;
let aug = 31;
let sep = 30;
let oct = 31;
let nov = 30;
let dec = 31;

var userSign;
var userBirthday;

function findBirthday (birthDate) {
    // if (birthDate === "02/29") {
    //     userSign = "Pisces";
    // }
    birthDate.split("/");
    //should now have birthDate = ["MM", "DD"]
    if (birthDate[0] === "01") {
        userBirthday = parseInt(birthDate[1]);
    }
    if (birthDate[0] === "02" && birthDate[1] != "29") {
        userBirthday = jan + parseInt(birthDate[1]); 
    }
    if (birthDate[0] === "03") {
        userBirthday = jan + feb + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "04") {
        userBirthday = jan + feb + mar + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "05") {
        userBirthday = jan + feb + mar + apr + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "06") {
        userBirthday = jan + feb + mar + apr + may + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "07") {
        userBirthday = jan + feb + mar + apr + may + jun + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "08") {
        userBirthday = jan + feb + mar + apr + may + jun + jul + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "09") {
        userBirthday = jan + feb + mar + apr + may + jun + jul + aug + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "10") {
        userBirthday = jan + feb + mar + apr + may + jun + jul + aug + sep + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "11") {
        userBirthday = jan + feb + mar + apr + may + jun + jul + aug + sep + oct + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "12") {
        userBirthday = jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov + parseInt(birthDate[1]);
    }
}
// WHAT DO WE DO ABOUT CUSPS?? ...CUSPS AREN'T REAL... BUT WHAT DO WE *DO?*

function findSign(userBirthday) {
    if (userBirthday >= 81 && userBirthday <= 110) {
        userSign = "Aries";
    }
    if (userBirthday >= 111 && userBirthday <= 141) {
        userSign = "Taurus";
    }
    if (userBirthday >= 142 && userBirthday <= 172) {
        userSign = "Gemini";
    }
    if (userBirthday >= 173 && userBirthday <= 204) {
        userSign = "Cancer";
    }
    if (userBirthday >= 205 && userBirthday <= 235) {
        userSign = "Leo";
    }
    if (userBirthday >= 236 && userBirthday <= 266) {
        userSign = "Virgo";
    }
    if (userBirthday >= 267 && userBirthday <= 296) {
        userSign = "Libra";
    }
    if (userBirthday >= 297 && userBirthday <= 326) {
        userSign = "Scorpio";
    }
    if (userBirthday >= 327 && userBirthday <= 356) {
        userSign = "Sagittarius";
    }
    if (userBirthday >= 357 && userBirthday <= 366 || userBirthday >= 1 && userBirthday <= 19) {
        userSign = "Capricorn";
    }
    if (userBirthday >= 20 && userBirthday <= 49) {
        userSign = "Aquarius";
    }
    if (userBirthday >= 50 && userBirthday <= 80) {
        userSign = "Pisces";
    }
}

// see if you can shorten the month calculations... like jan = 0, feb = 31, mar = 60, etc. ...