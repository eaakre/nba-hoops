// Be able to target dropdown menus
let homeDropdown = document.getElementById("home-dropdown");
let awayDropdown = document.getElementById("away-dropdown");

// Target labels to be able to change label based on dropdown
let homeLabel = document.getElementById("home-label");
let awayLabel = document.getElementById("away-label");

// Target the two dice
let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");

// Target team and player cards
let homeTeamCard = document.getElementById("homeTeamImg");
let rosterTeamCard = document.getElementById("rosterTeamImg");
let awayTeamCard = document.getElementById("awayTeamImg");
let tableContainer = document.getElementById("tableContainer");

// Target player cards for home and team pages
let homePG = document.getElementById("home-pg");
let homeSG = document.getElementById("home-sg");
let homeSF = document.getElementById("home-sf");
let homePF = document.getElementById("home-pf");
let homeC = document.getElementById("home-c");
let home6 = document.getElementById("home-6");
let home7 = document.getElementById("home-7");
let home8 = document.getElementById("home-8");
let awayPG = document.getElementById("away-pg");
let awaySG = document.getElementById("away-sg");
let awaySF = document.getElementById("away-sf");
let awayPF = document.getElementById("away-pf");
let awayC = document.getElementById("away-c");


// Open Gallery view of player cards
let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");
let playerStats = document.getElementById("playerStats")

function openFullImg(img) {
    fullImg.src = img;
    fullImgBox.style.display = "flex";
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

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

// Use value from selected options on dropdowns to change roster cards
function showRosterCards(side, option) {
    let selction = `${option}`

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

    // Create table of roster with stats.
    // Only displays names right now
    // let rosterTable = document.createElement("table"),
    //     row = rosterTable.insertRow(), cell;
    //     let perrow = 8; // number of colums
    //     roster.forEach((value, i) => {
    //         cell = row.insertCell();
    //         cell.innerHTML = value.fullname;

    //         var next = i + 1;
    //         if (next%perrow==0 && next!=roster.length) { row = rosterTable.insertRow(); }
    //     });

    //     tableContainer.appendChild(rosterTable);


    // show team card and player cards of team on roster page
    if (side === "Home") {
        homeLabel.innerText = selction;
        rosterTeamCard.src = `teamcards/${teamFile}.png`;
        for (i=0; i < roster.length; i++) {
            if (roster[i].position == 1) {
                homePG.src = roster[i].card;
            } else if (roster[i].position == 2) {
                homeSG.src = roster[i].card;
            } else if (roster[i].position == 3) {
                homeSF.src = roster[i].card
            } else if (roster[i].position == 4) {
                homePF.src = roster[i].card
            } else if (roster[i].position == 5) {
                homeC.src = roster[i].card;
            } else if (roster[i].position == 6) {
                home6.src = roster[i].card;
            } else if (roster[i].position == 7) {
                home7.src = roster[i].card;
            } else if (roster[i].position == 8) {
                home8.src = roster[i].card;
            }
        }
    }
}


// When user clicks on "Play" button, roll the dice 
function playGame() {
    let roll1 = Math.floor(Math.random() * 6 + 1);
    let roll2 = Math.floor(Math.random() * 6 + 1);
    let rolls = [roll1, roll2]
    let die;


    // loop for each individual die
    for (i = 0; i < rolls.length; i++) {
        if (i === 0) {
            die = die1;
        } else {
            die = die2;
        }
        
        // Change the dice image to the correct png file
        switch (rolls[i]) {
            case 1:
                die.src = "dice/dice1.png";
                break;
            case 2:
                die.src = "dice/dice2.png";
                break;
            case 3:
                die.src = "dice/dice3.png";
                break;
            case 4:
                die.src = "dice/dice4.png";
                break;
            case 5:
                die.src = "dice/dice5.webp";
                break;
            case 6:
                die.src = "dice/dice6.webp";
                break;
            default:
                break;
        }
    } 
    console.log(rolls)      
}
