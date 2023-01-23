// Be able to target dropdown menus
let homeDropdown = document.getElementById("home-dropdown");
let awayDropdown = document.getElementById("away-dropdown");

// Target labels to be able to change label based on dropdown
let homeLabel = document.getElementById("home-label");
let awayLabel = document.getElementById("away-label");

// Target team and player cards
let homeTeamCard = document.getElementById("homeTeamImg");
let awayTeamCard = document.getElementById("awayTeamImg");
let homePG = document.getElementById("home-pg");
let homeSG = document.getElementById("home-sg");
let homeSF = document.getElementById("home-sf");
let homePF = document.getElementById("home-pf");
let homeC = document.getElementById("home-c");
let awayPG = document.getElementById("away-pg");
let awaySG = document.getElementById("away-sg");
let awaySF = document.getElementById("away-sf");
let awayPF = document.getElementById("away-pf");
let awayC = document.getElementById("away-c");



// Populate Home Dropdown from teams.js
for (let i = 0; i < team.length; i++) {
    let teamName = team[i].city;
    let option = document.createElement('option');
    option.textContent = teamName;
    option.value = teamName;

    homeDropdown.appendChild(option)
}

// Populate Away Dropdown from teams.js
for (let i = 0; i < team.length; i++) {
    let teamName = team[i].city;
    let option = document.createElement('option');
    option.textContent = teamName;
    option.value = teamName;
    awayDropdown.appendChild(option)
}

// Use value from selected options on dropdowns to change lineup cards
function showCards(side, option) {
    let selction = `${side}: ${option}`

    // RegEx for teams with spaces in their names
    const dash = /\s/;
    let teamFile = option.replace(dash, "-").toLowerCase();

    // Create new array of roster for selected teams
    let roster = [];
    for (i=0; i < player.length; i++) {
        if (player[i].team === option) {
            roster.push(player[i])
        }
    }

    // show team card and player cards of home team on home page and then away team
    if (side === "Home") {
        homeLabel.innerText = selction;
        homeTeamCard.src = `teamcards/${teamFile}.png`;
        for (i=0; i < 5; i++) {
            if (roster[i].position == 1) {
                homePG.src = roster[i].card;
            } else if (roster[i].position == 2) {
                homeSG.src = roster[i].card;
            } else if (roster[i].position == 3) {
                homeSF.src = roster[i].card
            } else if (roster[i].position == 4) {
                homePF.src = roster[i].card
            } else {
                homeC.src = roster[i].card;
            }
        }
    } else {
        awayLabel.innerText = selction
        awayTeamCard.src = `teamcards/${teamFile}.png`;
        for (i=0; i < 5; i++) {
            if (roster[i].position == 1) {
                awayPG.src = roster[i].card;
            } else if (roster[i].position == 2) {
                awaySG.src = roster[i].card;
            } else if (roster[i].position == 3) {
                awaySF.src = roster[i].card
            } else if (roster[i].position == 4) {
                awayPF.src = roster[i].card
            } else {
                awayC.src = roster[i].card;
            }
        }
    }
}