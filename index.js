var userSign;
var userBirthday;
// var userInput = document.getElementById("user-birthday")
var userInputTakeTwo = prompt("What is your birthday? MM/DD/YYYY, please!")
//ADD VAR FOR RESULTS!!

function findBirthday (userInputTakeTwo) {
// calculates what number day of the year the user's birthday is

// MONTH VARIABLES; value of month is the amount of days that has passed before its first day, i.e. 0 days have passed of a year before Jan. 1st, 31 days have passed of a year before Feb. 1st, etc.

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

    let birthDate = userInputTakeTwo.split("-");
    //should now have birthDate = ["YYYY", "MM", "DD"] (NOTE: you don't actually need the year!!)
    if (birthDate[1] === "01") {
        userBirthday = jan + parseInt(birthDate[2]);
    }
    if (birthDate[1] === "02") {
        userBirthday = feb + parseInt(birthDate[2]); 
    }
    if (birthDate[1] === "03") {
        userBirthday = mar + parseInt(birthDate[2]);
    }
    if (birthDate[1] === "04") {
        userBirthday = apr + parseInt(birthDate[2]);
    }
    if (birthDate[1] === "05") {
        userBirthday = may + parseInt(birthDate[2]);
    }
    if (birthDate[1] === "06") {
        userBirthday = jun + parseInt(birthDate[2]);
    }
    if (birthDate[1] === "07") {
        userBirthday = jul + parseInt(birthDate[2]);
    }
    if (birthDate[1] === "08") {
        userBirthday = aug + parseInt(birthDate[2]);
    }
    if (birthDate[1] === "09") {
        userBirthday = sep + parseInt(birthDate[2]);
    }
    if (birthDate[1] === "10") {
        userBirthday = oct + parseInt(birthDate[2]);
    }
    if (birthDate[1] === "11") {
        userBirthday = nov + parseInt(birthDate[2]);
    }
    if (birthDate[1] === "12") {
        userBirthday = dec + parseInt(birthDate[2]);
    }

    function findSign(userBirthday) {
        // calculates user's sign based on their birthday
    
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

        function describeSign(userSign) { 
            const p = document.createElement("p");
                
            if (userSign = "Aries") {
                return `You are an ${userSign}! Aries is the first sign of the Zodiac. It is associated with fresh vigor and new beginnings. Individuals born under this sign are said to have an enthusiastic, adventurous, and passionate character. They are usually ambitious, humorous, and pioneering. On the less positive side, they're also said to be prone to selfishness, boastfulness, intolerance, impulsiveness, and impatience.`
            }

            if (userSign = "Taurus") {
                return `You are a ${userSign}! Taurus is the second sign of the Zodiac and is associated with material pleasure. Individuals born under this sign are thought to have a calm, patient, reliable, loyal, affectionate, sensuous, ambitious, and determined character. They are also prone to hedonism, laziness, inflexibility, jealousy, and antipathy.`
            }

            if (userSign = "Gemini") {
                return `You are a ${userSign}! Gemini is the third sign of the Zodiac and is associated with youth and versatility. Individuals born under this sign are thought to have a sociable, fun-loving, versatile, lively, communicative, liberal, intelligent, mentally active, and friendly character. They are also thought to be prone to moodiness, inconsistency, superficiality, restlessness, and laziness.`
            }

            if (userSign = "Cancer") {
                return `You are a ${userSign}! Cancer is the fourth sign of the Zodiac. It is associated with family and domesticity. Individuals born under this sign are thought to have a kind, emotional, romantic, imaginative, sympathetic, nurturing, and intuitive character. They are also supposed to be prone to changeability, moodiness, hypersensitivity, depression, and clingy behavior.`
            }

            if (userSign = "Leo") {
                return `You are a ${userSign}! Leo is the fifth sign of the Zodiac and is associated with the keywords magnanimous, generous, hospitable, caring, warm, authoritative, active, and open. Leos are typically pictured as very dignified and regal. They are hard-working, ambitious, and enthusiastic, however, they are supposedly prone to laziness, often choosing to take "the easy way out." They are known to be exuberant, extroverted, and generous. They have a natural dramatic flair and are very creative. They are typically very self-assured and love taking center-stage in whatever arena they are in.`
            }

            if (userSign = "Virgo") {
                return `You are a ${userSign}! Virgo is the sixth sign of the Zodiac. It is associated with purity and service. Individuals born under this sign are thought to have a diligent, analytical, self-sufficient, controlled, orderly, and modest character. But they are also prone to fussiness, perfectionism, harsh criticism, coldness, and hypochondria.`
            }

            if (userSign = "Libra") {
                return `You are a ${userSign}! Libra is the seventh sign of the Zodiac. It is associated with justice. Individuals born under this sign are thought to have a pleasant, articulate, charming, social, charismatic character. They are artistic. But they also possess a fair, refined, diplomatic, even-tempered and self-sufficient character. On the negative side, they are thought to be indecisive, lazy, aloof, flirtatious, and shallow. They are also supposedly extravagant, frivolous, impatient, envious, and quarrelsome.`
            }

            if (userSign = "Scorpio") {
                return `You are a ${userSign}! Scorpio is the eighth sign of the Zodiac. It is associated with intensity, passion, and power. Individuals born under this sign are thought to have a complex, analytical, patient, keenly perceptive, inquisitive, focused, determined, hypnotic, and self-contained character. They are also prone to extremity, jealousy, envy, secretiveness, possessiveness, cruelty, and cunning.`
            }

            if (userSign = "Sagittarius") {
                return `You are a ${userSign}! Sagittarius is the ninth sign of the Zodiac. It is associated with travel and expansion. Individuals born under this sign are thought to have a straight-forward, dynamic, highly intelligent, extremely clever, ethical, humorous, generous, open-hearted, compassionate, and energetic character. They are also prone to restlessness, impulsiveness, impatience, and recklessness.`
            }

            if (userSign = "Capricorn") {
                return `You are a ${userSign}! Capricorn is the 10th sign of the Zodiac and is associated with hard work and business affairs. Individuals born under this sign are thought to have an ambitious, modest, patient, responsible, stable, trustworthy, powerful, intellectual, perspicacious, and persistent character. They are also prone to coldness, conservatism, rigidity, materialism, and dullness.`
            }

            if (userSign = "Aquarius") {
                return `You are an ${userSign}! Aquarius is the 11th sign of the Zodiac and is associated with future ideas and the unusual. Individuals born under this sign are thought to have a modest, creative, challenging, inquisitive, entertaining, progressive, stimulating, nocturnal, and independent character. They are also prone to rebelliousness, coldness, erraticism, indecisiveness, and impracticality.`
            }

            if (userSign = "Pisces") {
                return `You are a ${userSign}! Pisces is the 12th and last sign of the Zodiac and is associated with human emotions. Individuals born under this sign are thought to be tolerant, modest, dreamy, romantic, humorous, generous, emotional, receptive, and affectionate. They are thought to have an honest character. But they are also prone to exaggeration, fickleness, passiveness, hypersensitivity, and paranoia.`
            }
        mainDiv().appendChild(p);
        }


    describeSign(userSign);
    }    
    
    findSign(userBirthday);
}

// EventHandlers / Renderers

function renderHomePage() {
    // creates the HTML elements for the home page
    resetMainDiv();

    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");
    
    h2.innerText = "Find Playlists Based On Your Zodiac"
    h2.style.padding = "20px"
    
    p.innerText = "Input your birthday to receive music suggestions based on your astrological sign!"
    p.style.fontSize = "medium"
    p.style.paddingLeft = "20px"
    p.style.paddingBottom = "20px"
    p.style.paddingRight = "20px"
    p.style.marginTop = "0"
    
    a.innerText = "Start Generator"
    a.href = "#!"
    a.id = "start-generator-link"
    a.style.backgroundColor = "#ff4081"
    a.style.color = "#ffffff"
    a.style.padding = "10px"
    a.style.border = "none"
    a.style.boxShadow = "4px 4px 5px #bdbdbd"
    a.style.marginLeft = "20px"

    mainDiv().appendChild(h2);
    mainDiv().appendChild(p);
    mainDiv().appendChild(a);
}

function renderViewAllPlaylistsPage() {
    // creates the HTML elements for the "View All Playlists" page

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
}

function renderPlaylistGeneratorPage() {
    // creates the HTML elements for the "Playlist Generator" page

    resetMainDiv();

    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const input = document.createElement("input");
    const a = document.createElement("a");
    const form = document.createElement("form");
    const button = document.createElement("button");

    h2.innerText = "Playlist Generator"
    h2.style.padding = "20px"

    p.innerText = "Input your birthday below for your playlist!"
    p.style.paddingLeft = "20px"

    input.type = "date"
    input.id = "user-birthday"
    input.class = "validate"
    input.style.paddingLeft = "20px"
    input.style.width = "200px"

    form.id = "form"
    
    button.innerText = "Generate Playlists"
    button.type = "submit"
    button.id = "generate-playlists-link"
    button.style.backgroundColor = "#ff4081"
    button.style.color = "#ffffff"
    button.style.padding = "10px"
    button.style.border = "none"
    button.style.boxShadow = "4px 4px 5px #bdbdbd"
    button.style.marginLeft = "20px"
    // button.addEventListener("click", findBirthday)
    button.addEventListener("click", userInputTakeTwo)

    mainDiv().appendChild(h2);
    mainDiv().appendChild(p);
    mainDiv().appendChild(input);
    mainDiv().appendChild(a);
    mainDiv().appendChild(form);
    mainDiv().appendChild(button);

    form.appendChild(input);
    form.appendChild(button);
}

function renderPlaylistResultsPage () {
    resetMainDiv();

    mainDiv().innerHTML = listOfPlaylists();
}

// Helpers
function resetMainDiv() {
    mainDiv().innerHTML = ""
}

// NODE GETTERS
const mainDiv = () => document.getElementById("main")
const viewAllPlaylistsLink = () => document.getElementById("view-all-playlists-link")
const homePageLink = () => document.getElementById("home-page-link")
const startGeneratorButton = () => document.getElementById("start-generator-link")
const generatePlaylistsButton = () => document.getElementById("generate-playlists-link")
const playlistResultsPage = () => document.getElementById("playlist-results")

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

// function attachGeneratePlaylistsClickEvent() {
//     generatePlaylistsButton().addEventListener("submit", renderPlaylistResultsPage)
// }

function attachGeneratePlaylistsClickEvent() {
    generatePlaylistsButton().addEventListener("submit", submitEvent)
}

function submitEvent(event) {
    const p = document.createElement("p")
    p.textContent = `INSERT ASTROLOGY DESCRIPTION HERE.`;
    event.preventDefault();
}

const form = document.getElementById("form");

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    renderHomePage();
    attachViewAllPlaylistsClickEvent();
    attachHomePageClickEvent();
    attachStartGeneratorClickEvent();
    attachGeneratePlaylistsClickEvent();
    logSubmitEvent();
})

// Submit Button
form.addEventListener('submit', logSubmitEvent)

// Templates

const listOfPlaylistsTemplate = () => {
    return `
    <table class="highlight" id="playlist-results">
    <thead>
      <tr>
          <th>Name</th>
          <th>Item Name</th>
          <th>Item Price</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Alvin</td>
        <td>Eclair</td>
        <td>$0.87</td>
      </tr>
      <tr>
        <td>Alan</td>
        <td>Jellybean</td>
        <td>$3.76</td>
      </tr>
      <tr>
        <td>Jonathan</td>
        <td>Lollipop</td>
        <td>$7.00</td>
      </tr>
    </tbody>
  </table>`
}