// // PLAYLIST ARRAYS;
// const ariesPlaylists = [
//     "37i9dQZF1DX2DC3Q7JOmYe", // Aries
//     "37i9dQZF1DX66m4icL86Ru", // BBE
//     "37i9dQZF1DWW46Vfs1oltB", // K-Hip-Hop +82
//     "37i9dQZF1DWWvmOXYvR5a6" // TrenChill K-Hip-Hop
// ]

// const taurusPlaylists = [
//     "37i9dQZF1DXbCgDGG5xQtb", // Taurus
//     "37i9dQZF1DWTDafB3skWPN", // Feeling Accomplished
//     "37i9dQZF1DX1OY2Lp0bIPp", // Monday Motivation
//     "37i9dQZF1DXcxacyAXkQDu" // Cozy Blend
// ]

// const geminiPlaylists = [
//     "37i9dQZF1DWWVULl5wUsL9", // Gemini
//     "37i9dQZF1DX6GwdWRQMQpq", // Feelin' Myself
//     "37i9dQZF1DWSnRSDTCsoPk", // Energy Booster: K-Pop
// ]

// const cancerPlaylists = [
//     "37i9dQZF1DXaeX3MJpiD4U", // Cancer
//     "37i9dQZF1DX7rOY2tZUw1k", // Timeless Love Songs
//     "37i9dQZF1DWVIzZt2GAU4X", // Piano Ballads
// ]

// const leoPlaylists = [
//     "37i9dQZF1DX7cvHpkIJFt2", // Leo
//     "37i9dQZF1DX4fpCWaHOned", // Confidence Boost
//     "37i9dQZF1DX66m4icL86Ru", // BBE
//     "37i9dQZF1DWW46Vfs1oltB" // K-Hip-Hop +82
// ]

// const virgoPlaylists = [
//     "37i9dQZF1DX6PdsVYbP4rI", // Virgo
//     "37i9dQZF1DWSnRSDTCsoPk", // Feeling Accomplished
//     "37i9dQZF1DXdxcBWuJkbcy", // Motivation Mix
// ]

// const libraPlaylists = [
//     "37i9dQZF1DXco4NYQOMLiT", // Libra
//     "37i9dQZF1DX6GwdWRQMQpq", // Feelin' Myself
//     "37i9dQZF1DWSnRSDTCsoPk", // Energy Booster: K-Pop
// ]

// const scorpioPlaylists = [
//     "37i9dQZF1DX0YZgrwmizcR", // Scorpio
//     "37i9dQZF1DX3xgbKZSVZNH", // Power Ballads
//     "37i9dQZF1DWVIzZt2GAU4X", // Piano Ballads
//     "37i9dQZF1DX4SBhb3fqCJd" // Are & Be
// ]

// const sagittariusPlaylists = [
//     "37i9dQZF1DX93MXPufCcuk", // Sagittarius
//     "37i9dQZF1DWW46Vfs1oltB", // K-Hip-Hop +82
//     "37i9dQZF1DX8C585qnMYHP", // Fresh Finds Experimental
// ]

// const capricornPlaylists = [
//     "37i9dQZF1DX2rcqmLx0nK4", // Capricorn
//     "37i9dQZF1DWTDafB3skWPN", // Feeling Accomplished
//     "37i9dQZF1DXbmCTvLQy5AO", // Work It, Own It
//     "37i9dQZF1DXc5e2bJhV6pu" // Morning Motivation
// ]

// const aquariusPlaylists = [
//     "37i9dQZF1DX7F9VDRJOFhw", // Aquarius
//     "37i9dQZF1DX8C585qnMYHP", // Fresh Finds Experimental
//     "37i9dQZF1DWSnRSDTCsoPk", // Energy Booster: K-Pop
//     "37i9dQZF1DWTggY0yqBxES" // Alternative Hip-Hop
// ]

// const piscesPlaylists = [
//     "37i9dQZF1DWX0EDWtabVRv", // Pisces
//     "37i9dQZF1DWSiZVO2J6WeI", // Dreamy Vibes
//     "37i9dQZF1DWVIzZt2GAU4X", // Piano Ballads
//     "37i9dQZF1DX56qfiUZBncF" // Creativity Boost
// ]


// Fetch Requests
const playlists = []

const loadPlaylists = () => {
    fetch("http://localhost:3000/playlists")
    .then(resp => resp.json())
    .then(data => playlists.push(data))
}

// Birthday Functions START
let userSign;
let userBirthday;

function findBirthday () {
// calculates what number day of the year the user's birthday is
  let userInput = document.getElementById("user-birthday").value

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

  // BIRTHDAY TO NUMERICAL DAY OF THE YEAR CALCULATIONS  
  let birthDate = userInput.split("-");
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
    // calculates user's sign based on their birthday & describes their sign

    const p = document.createElement("p");

    // Build Results Section
    let results = document.createElement("li")
    results.className = 'results'

    if (userBirthday >= 81 && userBirthday <= 110) {
      userSign = "Aries";
      p.innerHTML = `<p>You are an <b>${userSign}</b>! ${playlists[0][0]['Aries'][0]["characteristics"]}</p>

      <div class="row">
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Aries'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Aries'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Aries'][0]["link"]}">(link to playlist)</a></p>
        </div>

        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Aries'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Aries'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Aries'][1]["link"]}">(link to playlist)</a></p>
        </div>

        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Aries'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Aries'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Aries'][2]["link"]}">(link to playlist)</a></p>
        </div>

        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Aries'][3]["name"]}</b></h5>
          <i>${playlists[0][0]['Aries'][3]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Aries'][3]["link"]}">(link to playlist)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 111 && userBirthday <= 141) {
      userSign = "Taurus";
      p.innerHTML = `<p>You are a <b>${userSign}</b>! ${playlists[0][0]['Taurus'][0]["characteristics"]}</p>
      
      <div class="row">
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Taurus'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Taurus'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Taurus'][0]["link"]}">(link to playlist)</a></p>
        </div>
    
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Taurus'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Taurus'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Taurus'][1]["link"]}">(link to playlist)</a></p>
        </div>
    
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Taurus'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Taurus'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Taurus'][2]["link"]}">(link to playlist)</a></p>
        </div>
    
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Taurus'][3]["name"]}</b></h5>
          <i>${playlists[0][0]['Taurus'][3]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Taurus'][3]["link"]}">(link to playlist)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 142 && userBirthday <= 172) {
      userSign = "Gemini";
      p.innerHTML = `<p>You are a <b>${userSign}</b>! ${playlists[0][0]['Gemini'][0]["characteristics"]}</p>
      
      <div class="row">
        <div class="col s4">
          <h5><b>${playlists[0][0]['Gemini'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Gemini'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Gemini'][0]["link"]}">(PLAYLIST LINK)</a></p>
        </div>
          
        <div class="col s4">
          <h5><b>${playlists[0][0]['Gemini'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Gemini'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Gemini'][1]["link"]}">(PLAYLIST LINK)</a></p>
        </div>
        
        <div class="col s4">
          <h5><b>${playlists[0][0]['Gemini'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Gemini'][2]["description"]}</i>
          <br><br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Gemini'][2]["link"]}">(PLAYLIST LINK)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 173 && userBirthday <= 204) {
      userSign = "Cancer";
      p.innerHTML = `<p>You are a <b>${userSign}</b>! ${playlists[0][0]['Cancer'][0]["characteristics"]}</p>

      <div class="row">
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Cancer'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Cancer'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Cancer'][0]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Cancer'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Cancer'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Cancer'][1]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Cancer'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Cancer'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Cancer'][2]["link"]}">(link to playlist)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 205 && userBirthday <= 235) {
      userSign = "Leo";
      p.innerHTML = `<p>You are a <b>${userSign}</b>! ${playlists[0][0]['Leo'][0]["characteristics"]}</p>
      
      <div class="row">
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Leo'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Leo'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Leo'][0]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Leo'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Leo'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Leo'][1]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Leo'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Leo'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Leo'][2]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Leo'][3]["name"]}</b></h5>
          <i>${playlists[0][0]['Leo'][3]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Leo'][3]["link"]}">(link to playlist)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 236 && userBirthday <= 266) {
      userSign = "Virgo";
      p.innerHTML = `<p>You are a <b>${userSign}</b>! ${playlists[0][0]['Virgo'][0]["characteristics"]}</p>
      
      <div class="row">
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Virgo'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Virgo'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Virgo'][0]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Virgo'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Virgo'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Virgo'][1]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Virgo'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Virgo'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Virgo'][2]["link"]}">(link to playlist)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 267 && userBirthday <= 296) {
      userSign = "Libra";
      p.innerHTML = `<p>You are a <b>${userSign}</b>! ${playlists[0][0]['Libra'][0]["characteristics"]}</p>
      
      <div class="row">
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Libra'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Libra'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Libra'][0]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Libra'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Libra'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Libra'][1]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Libra'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Libra'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Libra'][2]["link"]}">(link to playlist)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 297 && userBirthday <= 326) {
      userSign = "Scorpio";
      p.innerHTML = `<p>You are a <b>${userSign}</b>! ${playlists[0][0]['Scorpio'][0]["characteristics"]}</p>
      
      <div class="row">
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Scorpio'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Scorpio'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Scorpio'][0]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Scorpio'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Scorpio'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Scorpio'][1]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Scorpio'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Scorpio'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Scorpio'][2]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Scorpio'][3]["name"]}</b></h5>
          <i>${playlists[0][0]['Scorpio'][3]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Scorpio'][3]["link"]}">(link to playlist)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 327 && userBirthday <= 356) {
      userSign = "Sagittarius";
      p.innerHTML = `<p>You are a <b>${userSign}</b>! ${playlists[0][0]['Sagittarius'][0]["characteristics"]}</p>
      
      <div class="row">
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Sagittarius'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Sagittarius'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Sagittarius'][0]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Sagittarius'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Sagittarius'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Sagittarius'][1]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s4" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Sagittarius'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Sagittarius'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Sagittarius'][2]["link"]}">(link to playlist)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 357 && userBirthday <= 366 || userBirthday >= 1 && userBirthday <= 19) {
      userSign = "Capricorn";
      p.innerHTML = `<p>You are a <b>${userSign}</b>! ${playlists[0][0]['Capricorn'][0]["characteristics"]}</p>
      
      <div class="row">
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Capricorn'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Capricorn'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Capricorn'][0]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Capricorn'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Capricorn'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Capricorn'][1]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Capricorn'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Capricorn'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Capricorn'][2]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Capricorn'][3]["name"]}</b></h5>
          <i>${playlists[0][0]['Capricorn'][3]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Capricorn'][3]["link"]}">(link to playlist)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 20 && userBirthday <= 49) {
      userSign = "Aquarius";
      p.innerHTML = `<p>You are an <b>${userSign}</b>! ${playlists[0][0]['Aquarius'][0]["characteristics"]}</p>
      
      <div class="row">
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Aquarius'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Aquarius'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Aquarius'][0]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Aquarius'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Aquarius'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Aquarius'][1]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Aquarius'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Aquarius'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Aquarius'][2]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Aquarius'][3]["name"]}</b></h5>
          <i>${playlists[0][0]['Aquarius'][3]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Aquarius'][3]["link"]}">(link to playlist)</a></p>
        </div>
      </div>`
    }
    else if (userBirthday >= 50 && userBirthday <= 80) {
      userSign = "Pisces";
      p.innerHTML = `<p>You are a <b>${userSign}</b>! ${playlists[0][0]['Pisces'][0]["characteristics"]}</p>
      
      <div class="row">
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Pisces'][0]["name"]}</b></h5>
          <i>${playlists[0][0]['Pisces'][0]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Pisces'][0]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Pisces'][1]["name"]}</b></h5>
          <i>${playlists[0][0]['Pisces'][1]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Pisces'][1]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Pisces'][2]["name"]}</b></h5>
          <i>${playlists[0][0]['Pisces'][2]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Pisces'][2]["link"]}">(link to playlist)</a></p>
        </div>
        
        <div class="col s3" style="padding-top: 20px;">
          <h5><b>${playlists[0][0]['Pisces'][3]["name"]}</b></h5>
          <i>${playlists[0][0]['Pisces'][3]["description"]}</i>
          <br>
          <b>Creator:</b> Spotify<br>
          <a href="${playlists[0][0]['Pisces'][3]["link"]}">(link to playlist)</a></p>
        </div>            
      </div>`
    }
    else {
      p.innerHTML = "Invalid birthday entered; please re-enter your birthday."
    }

    let pDiv = document.getElementById("sign-result")
    
    if (pDiv) {
      pDiv.remove();
    }

    p.id = "sign-result"
    mainDiv().appendChild(p);
    }

  findSign(userBirthday);
}

function birthdayZodiac () {
  findBirthday();
}

// Birthday Functions END

// EventHandlers / Renderers
function renderHomePage() {
  // creates the HTML elements for the home page
  resetMainDiv();

  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const a = document.createElement("a");
  
  h3.innerText = "Find Playlists Based On Your Zodiac"
  h3.style.paddingLeft = "20px"
  h3.style.paddingRight = "20px"
  h3.style.paddingTop = "20px"

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

  mainDiv().appendChild(h3);
  mainDiv().appendChild(p);
  mainDiv().appendChild(a);
}

function renderPlaylistGeneratorPage() {
  // creates the HTML elements for the "Playlist Generator" page

  resetMainDiv();

  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const input = document.createElement("input");
  const a = document.createElement("a");
  const form = document.createElement("form");

  h3.innerText = "Playlist Generator"
  h3.style.paddingLeft = "20px"
  h3.style.paddingRight = "20px"
  h3.style.paddingTop = "20px"

  p.innerText = "Input your birthday below for your playlists!"
  p.style.paddingLeft = "20px"

  input.type = "date"
  input.id = "user-birthday"
  input.class = "validate" 
  
  form.id = "form"   
  
  input.style.paddingLeft = "20px"
  input.style.width = "200px"

  a.innerText = "Generate Playlists"
  a.type = "submit"
  a.href = "#!"
  a.id = "generate-playlists-link"
  a.style.backgroundColor = "#ff4081"
  a.style.color = "#ffffff"
  a.style.padding = "10px"
  a.style.border = "none"
  a.style.boxShadow = "4px 4px 5px #bdbdbd"
  a.style.marginLeft = "20px"
  a.addEventListener("dblclick", birthdayZodiac)

  mainDiv().appendChild(h3);
  mainDiv().appendChild(p);
  mainDiv().appendChild(a);
  
  mainDiv().appendChild(input);
  mainDiv().appendChild(form);

  form.appendChild(input);
  
  form.appendChild(a);
}

// Helpers
function resetMainDiv() {
  mainDiv().innerHTML = ""
}

// NODE GETTERS
const mainDiv = () => document.getElementById("main")
const homePageLink = () => document.getElementById("home-page-link")
const startGeneratorButton = () => document.getElementById("start-generator-link")
const generatePlaylistsButton = () => document.getElementById("generate-playlists-link")

// EventListeners
function attachHomePageClickEvent() {
  homePageLink().addEventListener("click", renderHomePage)
}

function attachStartGeneratorClickEvent() {
  startGeneratorButton().addEventListener("click", renderPlaylistGeneratorPage)
}

const form = document.getElementById("form");

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage();
  attachHomePageClickEvent();
  attachStartGeneratorClickEvent();
})

// Initial Render
function initialize() {
  renderHomePage();
  loadPlaylists();
}

initialize();