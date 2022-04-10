//MONTH VARIABLES;

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
// calculates what number day of the year the user's birthday is
    birthDate.split("/");
    //should now have birthDate = ["MM", "DD", "YYYY"]
    //(you don't actually need the year!!)
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
// 
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

// see if you can shorten the month calculations... like jan = 0, feb = 31, mar = 60, etc. ... EDIT: DONE!!

// EventHandlers
function renderHomePage() {
    // creates the HTML elements for the home page
    resetMainDiv();

    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const button = document.createElement("button");
    
    h2.innerText = "Find Playlists Based On Your Zodiac"
    h2.style.padding = "20px"
    
    p.innerText = "Input your birthday to receive music suggestions based on your astrological sign!"
    p.style.paddingLeft = "20px"
    p.style.paddingBottom = "20px"
    p.style.paddingRight = "20px"
    
    a.innerText = "Start Generator"
    a.href = "#!"
    a.style.backgroundColor = "#ff4081"
    a.style.color = "#ffffff"
    a.style.padding = "10px"
    a.style.border = "none"
    a.style.boxShadow = "4px 4px 5px #bdbdbd"
    a.style.boxShadow.blur = 
    a.style.marginLeft = "20px"

    mainDiv().appendChild(h2);
    mainDiv().appendChild(p);
    mainDiv().appendChild(a);
}

function renderViewAllPlaylistsPage() {
    resetMainDiv();

    const h2 = document.createElement("h2");
    // const p = document.createElement("p");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
   
    h2.innerText = "All Zodiac Playlists"
    h2.style.padding = "20px"
    
    li.innerText = "Official Aries Spotify playlist"
    li.style.paddingLeft = "20px"

    ul.appendChild(li);

    mainDiv().appendChild(h2);
    mainDiv().appendChild(ul);

    // p.innerText = "Input your birthday to receive music suggestions based on your astrological sign!"
    // p.style.paddingLeft = "20px"
    // p.style.paddingBottom = "20px"
    // p.style.paddingRight = "20px"
}

function renderPlaylistGeneratorPage() {
    resetMainDiv();

    const h2 = document.createElement("h2")
    const p = document.createElement("p")

    h2.innerText = "Playlist Generator"
    h2.style.marginTop = "0"

    p.innerText = "Input your birthday below for your playlist!"

    mainDiv().appendChild(h2);
    mainDiv().appendChild(p);
}


// Helpers
function resetMainDiv() {
    mainDiv().innerHTML = ""
}

// NODE GETTERS
const mainDiv = () => document.getElementById("main")
const viewAllPlaylistsLink = () => document.getElementById("view-all-playlists-link")
const homePageLink = () => document.getElementById("home-page-link")
const startGeneratorButton = () => document.getElementById("start-generator-link-button")

// EventListeners

function attachViewAllPlaylistsClickEvent() {
    viewAllPlaylistsLink().addEventListener("click", renderViewAllPlaylistsPage)
}

function attachHomePageClickEvent() {
    homePageLink().addEventListener("click", renderHomePage)
}

function attachStartGeneratorClickEvent() {
    startGeneratorButton().addEventListener("click", renderPlaylistGeneratorPage)
}

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    renderHomePage();
    attachViewAllPlaylistsClickEvent();
    attachHomePageClickEvent();
    attachStartGeneratorClickEvent();
})