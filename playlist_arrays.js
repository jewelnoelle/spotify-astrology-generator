// ARRAY TEMPLATES

// const signPlaylist3Template = [
//     "1", << SIGN
//     "2", << NAME THEM
//     "3",
// ]

// const signPlaylist4Template = [
//     "1",
//     "2",
//     "3",
//     "4 (if there is one)"
// ]

// START OF ARRAYS

const ariesPlaylists = [
    "37i9dQZF1DX2DC3Q7JOmYe", // Aries
    "37i9dQZF1DX66m4icL86Ru", // BBE
    "37i9dQZF1DWW46Vfs1oltB", // K-Hip-Hop +82
    "37i9dQZF1DWWvmOXYvR5a6" // TrenChill K-Hip-Hop
]

const taurusPlaylists = [
    "37i9dQZF1DXbCgDGG5xQtb", // Taurus
    "37i9dQZF1DWTDafB3skWPN", // Feeling Accomplished
    "37i9dQZF1DX1OY2Lp0bIPp", // Monday Motivation
    "37i9dQZF1DXcxacyAXkQDu" // Cozy Blend
]

const geminiPlaylists = [
    "37i9dQZF1DWWVULl5wUsL9", // Gemini
    "37i9dQZF1DX6GwdWRQMQpq", // Feelin' Myself
    "37i9dQZF1DWSnRSDTCsoPk", // Energy Booster: K-Pop
]

const cancerPlaylists = [
    "37i9dQZF1DXaeX3MJpiD4U", // Cancer
    "37i9dQZF1DX7rOY2tZUw1k", // Timeless Love Songs
    "37i9dQZF1DWVIzZt2GAU4X", // Piano Ballads
]

const leoPlaylists = [
    "37i9dQZF1DX7cvHpkIJFt2", // Leo
    "37i9dQZF1DX4fpCWaHOned", // Confidence Boost
    "37i9dQZF1DX66m4icL86Ru", // BBE
    "37i9dQZF1DWW46Vfs1oltB" // K-Hip-Hop +82
]

const virgoPlaylists = [
    "37i9dQZF1DX6PdsVYbP4rI", // Virgo
    "37i9dQZF1DWSnRSDTCsoPk", // Feeling Accomplished
    "37i9dQZF1DXdxcBWuJkbcy", // Motivation Mix
]

const libraPlaylists = [
    "37i9dQZF1DXco4NYQOMLiT", // Libra
    "37i9dQZF1DX6GwdWRQMQpq", // Feelin' Myself
    "37i9dQZF1DWSnRSDTCsoPk", // Energy Booster: K-Pop
]

const scorpioPlaylists = [
    "37i9dQZF1DX0YZgrwmizcR", // Scorpio
    "37i9dQZF1DX3xgbKZSVZNH", // Power Ballads
    "37i9dQZF1DWVIzZt2GAU4X", // Piano Ballads
    "37i9dQZF1DX4SBhb3fqCJd" // Are & Be
]

const sagittariusPlaylists = [
    "37i9dQZF1DX93MXPufCcuk", // Sagittarius
    "37i9dQZF1DWW46Vfs1oltB", // K-Hip-Hop +82
    "37i9dQZF1DX8C585qnMYHP", // Fresh Finds Experimental
]

const capricornPlaylists = [
    "37i9dQZF1DX2rcqmLx0nK4", // Capricorn
    "37i9dQZF1DWTDafB3skWPN", // Feeling Accomplished
    "37i9dQZF1DXbmCTvLQy5AO", // Work It, Own It
    "37i9dQZF1DXc5e2bJhV6pu" // Morning Motivation
]

const aquariusPlaylists = [
    "37i9dQZF1DX7F9VDRJOFhw", // Aquarius
    "37i9dQZF1DX8C585qnMYHP", // Fresh Finds Experimental
    "37i9dQZF1DWSnRSDTCsoPk", // Energy Booster: K-Pop
    "37i9dQZF1DWTggY0yqBxES" // Alternative Hip-Hop
]

const piscesPlaylists = [
    "37i9dQZF1DWX0EDWtabVRv", // Pisces
    "37i9dQZF1DWSiZVO2J6WeI", // Dreamy Vibes
    "37i9dQZF1DWVIzZt2GAU4X", // Piano Ballads
    "37i9dQZF1DX56qfiUZBncF" // Creativity Boost
]

// 7 signs have 4 playlists, the other 5 have 3.     

// put array items in alphabetical order(?) >> NO. "sign playlist", "element playlist," "other playlist(s)"


const loadPlaylists = (signPlaylist) => {

    signPlaylist.forEach(
        fetch(baseUrl + signPlaylist[index] + "?market=US")
        .then(resp => resp.json())
    )
    // THEN: loop (function) through playlist array(s); draft below
    // .then(data => playlists.forEach(playlistGroup => renderPlaylistGroup(playlistResults)))
}

// loadPlaylists, then displayResults (NEW)

function displayResults(signPlaylist) {
    loadPlaylists(signPlaylist);
    signPlaylist.forEach(formatResults());

}

function formatResults () {

// PLAYLIST RESULTS, HTML.

<div class="row">

  <div class="col s3" style="padding-top: 20px; border: 3px solid pink lighten-4;  border-radius: 8px;">
    <h5><b>[Playlist Name]</b></h5>
    <i>[Playlist description.]</i>
    <br></br>
    <b>About Playlist:</b>
    <b>Creator:</b> [Spotify]
    <b>Why:</b> [explanation]
  </div>

  <div class="col s3" style="padding-top: 20px; border: 3px solid pink lighten-4;  border-radius: 8px;">
    <h5><b>[Playlist Name]</b></h5>
    <i>[Playlist description.]</i>
    <br></br>
    <b>About Playlist:</b>
    <b>Creator:</b> [Spotify]
    <b>Why:</b> [explanation]
  </div>

  <div class="col s3" style="padding-top: 20px; border: 3px solid pink lighten-4;  border-radius: 8px;">
    <h5><b>[Playlist Name]</b></h5>
    <i>[Playlist description.]</i>
    <br></br>
    <b>About Playlist:</b>
    <b>Creator:</b> [Spotify]
    <b>Why:</b> [explanation]
  </div>

  <div class="col s3" style="padding-top: 20px; border: 3px solid pink lighten-4;  border-radius: 8px;">
    <h5><b>[Playlist Name]</b></h5>
    <i>[Playlist description.]</i>
    <br></br>
    <b>About Playlist:</b>
    <b>Creator:</b> [Spotify]
    <b>Why:</b> [explanation]
  </div>
  
  </div>
}

