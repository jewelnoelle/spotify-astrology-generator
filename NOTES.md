### Birthday Calculations
* have variables for each month; when user inputs their b-day (MM/DD), take in that information and add up previous months' days then the DD value given.

### Features
* form to generate sign (submit)
* list out playlists (DOMContentLoaded)
* tell them a bit about their sign (DOMContentLoaded)
* the user can access the playlists via links (click)

### Stretch Goals
* ...maybe the user can input their sign directly?

### Navigation of Project
1. **USER INPUT:** Do you know your zodiac already? (maybe) OR Welcome to the Spotify Astrology Collection! Please input your birth date in the format MM/DD, for example 04/14.
2. Convert that input into a day out of the year.
    * special scenario for 02/29
    * if 04/14, take that in as a string, split down middle by "/" 

### Browsing Materialize
**NOTE:** Materialize had buttons I liked, but they were tricky to import into JavaScript, so I designed the buttons myself!

### Questions You Have
* No redirects; are we not allowed to provide a link to something within the API? i.e., linking to a Spotify playlist...
* Enoch mentioned "if you're not done with your project but you have your review..." In what scenario would that happen?
* `li.innerText = "hello"` <- How do I make this have multiple lines?
    * Check Job Tracker videos

### Notes (again)
* What do I do about Spotify's code asking to have an index.html? Can I import that HTML to mine? But it says no redirects...