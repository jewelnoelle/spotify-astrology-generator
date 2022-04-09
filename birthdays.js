//I'M TWEAKING THIS TO MAKE IT MORE EFFICIENT !!

//NOTE: this has now been migrated to index.js

let jan = 0;
let feb = 31;
let mar = 60;
let apr = 91;
let may = 121;
let jun = 152
let jul = 182;
let aug = 213;
let sep = 244;
let oct = 274;
let nov = 305;
let dec = 335;

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
    if (birthDate[0] === "02") {
        userBirthday = feb + parseInt(birthDate[1]); 
    }
    if (birthDate[0] === "03") {
        userBirthday = mar + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "04") {
        userBirthday = apr + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "05") {
        userBirthday = may + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "06") {
        userBirthday = jun + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "07") {
        userBirthday = jul + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "08") {
        userBirthday = aug + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "09") {
        userBirthday = sep + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "10") {
        userBirthday = oct + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "11") {
        userBirthday = nov + parseInt(birthDate[1]);
    }
    if (birthDate[0] === "12") {
        userBirthday = dec + parseInt(birthDate[1]);
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