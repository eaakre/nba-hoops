// Be able to target dropdown menus
let homeDropdown = document.getElementById("home-dropdown");
let awayDropdown = document.getElementById("away-dropdown");
let rosterDropdown = document.getElementById("roster-dropdown")
let background = document.getElementById("body");

// Target play screen and players
let playWindow = document.getElementById("playWindow");
let homePlayer = document.getElementById("home-player");
let awayPlayer = document.getElementById("away-player");
let homePlayerContainer = document.getElementById("homePlayerContainer");
let awayPlayerContainer = document.getElementById("awayPlayerContainer");
let homeTeamPlayScreen = document.getElementById("home-team-play-screen");
let awayTeamPlayScreen = document.getElementById("away-team-play-screen");
let homeTeamWins = document.getElementById("home-team-wins");
let awayTeamWins = document.getElementById("away-team-wins");
let selectedHome;
let selectedAway;
let homeStat = document.getElementById("homeStat");
let awayStat = document.getElementById("awayStat");

// Target labels to be able to change label based on dropdown
let homeLabel = document.getElementById("home-label");
let awayLabel = document.getElementById("away-label");
let rosterLabel = document.getElementById("roster-label");
let homeWinsLabel = document.getElementById("home-wins");
let awayWinsLabel = document.getElementById('away-wins');
let homeWins = 0;
let awayWins = 0;

if (homeWinsLabel) {
    homeWinsLabel.innerHTML = homeWins;
}
if (awayWinsLabel) {
    awayWinsLabel.innerHTML = awayWins;
}


// Target the two dice
let die1 = document.getElementById("die1");
let die2 = document.getElementById("die2");

// Target team and player cards
let homeTeamCard = document.getElementById("homeTeamImg");
let rosterTeamCard = document.getElementById("rosterTeamImg");
let homeTeam;
let awayTeamCard = document.getElementById("awayTeamImg");
let tableContainer = document.getElementById("tableContainer");
let awayTeam;

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
let playerStats = document.getElementById("playerStats");
let fullStats = document.getElementById("fullStats");
let playerName = document.getElementById("player-name");
let playerTeam = document.getElementById("player-team");
let playerPoints = document.getElementById("player-points");
let playerRebounds = document.getElementById("player-rebounds");
let playerAssists = document.getElementById("player-assists");
let playerSteals = document.getElementById("player-steals");
let playerBlocks = document.getElementById("player-blocks");
let playerPPG = document.getElementById("player-ppg");




// Open the gallery view of card and player stats
// Need to figure out the default stats instead of Pooh Richardson
function openFullImg(img, player) {
    fullImg.src = img;
    fullImgBox.style.display = "flex";
    fullStats.style.display = "flex";
    console.log(player)
    playerName.innerHTML = `${player.fullname}`;
    playerTeam.innerHTML = `Team: ${player.team}`;
    playerPoints.innerHTML = `Points: ${player.points}`;
    playerRebounds.innerHTML = `Rebounds: ${player.rebounds}`;
    playerAssists.innerHTML = `Assists: ${player.assists}`;
    playerSteals.innerHTML = `Steals: ${player.steals}`;
    playerBlocks.innerHTML = `Blocks: ${player.blocks}`;
    playerPPG.innerHTML = `PPG: ${player.ppg}`;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

// Reset wins on team change
function resetScore() {
    homeWins = 0;
    awayWins = 0;
    homeWinsLabel.innerHTML = homeWins;
    awayWinsLabel.innerHTML = awayWins;
}

// Populate Home Dropdown from teams.js
if (homeDropdown) {
    for (let i = 0; i < team.length; i++) {
        let teamName = team[i].city;
        let option = document.createElement('option');
        option.textContent = teamName;
        option.value = teamName;
        homeDropdown.appendChild(option)
    }
}


// Populate Away Dropdown from teams.js
if (awayDropdown) {
    for (let i = 0; i < team.length; i++) {
        let teamName = team[i].city;
        let option = document.createElement('option');
        option.textContent = teamName;
        option.value = teamName;
        awayDropdown.appendChild(option)
    }
}


// Populate Roster Dropdown from teams.js
if (rosterDropdown) {
    for (let i = 0; i < team.length; i++) {
        let teamName = team[i].city;
        let option = document.createElement('option');
        option.textContent = teamName;
        option.value = teamName;
        rosterDropdown.appendChild(option);
    }
}


// Use value from selected options on dropdowns to change lineup cards
function showCards(side, option) {
    resetScore();
    let selection = `${side}: ${option}`

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
        homeLabel.innerText = selection;
        // assign homeTeam to correct team in teams.js file
        for (let j = 0; j < team.length; j++) {
            if (team[j].city === option) {
                homeTeam = team[j]
            }
        }
    
        homeTeamCard.src = `teamcards/${teamFile}.png`;
        for (i=0; i < 5; i++) {
            if (roster[i].position == 1) {
                homePG.src = roster[i].card;
                homePG.value = roster[i]
            } else if (roster[i].position == 2) {
                homeSG.src = roster[i].card;
                homeSG.value = roster[i]
            } else if (roster[i].position == 3) {
                homeSF.src = roster[i].card
                homeSF.value = roster[i]
            } else if (roster[i].position == 4) {
                homePF.src = roster[i].card
                homePF.value = roster[i]
            } else {
                homeC.src = roster[i].card;
                homeC.value = roster[i]
            }
        }
    } else if (side === "Away") {
        awayLabel.innerText = selection
        // assign homeTeam to correct team in teams.js file
        for (let j = 0; j < team.length; j++) {
            if (team[j].city === option) {
                awayTeam = team[j]
            }
        }
        
        awayTeamCard.src = `teamcards/${teamFile}.png`;
        for (i=0; i < 5; i++) {
            if (roster[i].position == 1) {
                awayPG.src = roster[i].card;
                awayPG.value = roster[i];
            } else if (roster[i].position == 2) {
                awaySG.src = roster[i].card;
                awaySG.value = roster[i];
            } else if (roster[i].position == 3) {
                awaySF.src = roster[i].card;
                awaySF.value = roster[i];
            } else if (roster[i].position == 4) {
                awayPF.src = roster[i].card;
                awayPF.value = roster[i];
            } else {
                awayC.src = roster[i].card;
                awayC.value = roster[i];
            }
        }
    } else {
        rosterLabel.innerText = selection;
        // assign homeTeam to correct team in teams.js file
        for (let j = 0; j < team.length; j++) {
            if (team[j].city === option) {
                homeTeam = team[j]
            }
        }
        
        homeTeamCard.src = `teamcards/${teamFile}.png`;
        for (i=0; i < 5; i++) {
            if (roster[i].position == 1) {
                homePG.src = roster[i].card;
                homePG.value = roster[i]
            } else if (roster[i].position == 2) {
                homeSG.src = roster[i].card;
                homeSG.value = roster[i]
            } else if (roster[i].position == 3) {
                homeSF.src = roster[i].card
                homeSF.value = roster[i]
            } else if (roster[i].position == 4) {
                homePF.src = roster[i].card
                homePF.value = roster[i]
            } else {
                homeC.src = roster[i].card;
                homeC.value = roster[i]
            }
        }
    }
}

// Use value from selected options on dropdowns to change roster cards
function showRosterCards(side, option) {
    let selction = `${option}`



    // // Attempt to set background color of "Team pages" based on team selection
    // for (i=0; i < team.length; i++) {
    //     if (team[i].city === option) {
    //         background.style.backgroundColor = team[i].teamColor;
    //     }
    // }
    



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
    let sorting = false;

    
    const tableBody = document.getElementById('rosterPlayers');
    let rosterDataHtml = "";

    // Get player data from players.js
    // Switch position from numbers to positions
    for (let player of roster) {
        let pos;
        switch (player.position) {
            case "1":
                pos = 'PG';
                break;
            case "2":
                pos = 'SG';
                break;
            case "3":
                pos = 'SF';
                break;
            case "4":
                pos = 'PF';
                break;
            case "5":
                pos = 'C';
                break;
            default:
                pos = "Bench";
                break;

        }
        rosterDataHtml += `<tr><th class="tableName">${player.fullname}</th><td>${pos}</td><td>${player.games}</td><td>${player.points}</td><td>${player.rebounds}</td><td>${player.assists}</td><td>${player.steals}</td><td>${player.blocks}</td><td>${player.ppg}</td></tr>`
    }
    tableBody.innerHTML = rosterDataHtml
    
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


// Compare the stats of the two players based on dice
function compareStats(homePlayerStat, awayPlayerStat) {
    if (homePlayerStat > awayPlayerStat) {
        homeWins += 1;
        homePlayerContainer.style.backgroundColor = homeTeam.teamColor;
    } else if (homePlayerStat < awayPlayerStat) {
        awayWins += 1;
        awayPlayerContainer.style.backgroundColor = awayTeam.teamColor;
    } 
    homeWinsLabel.innerHTML = homeWins;
    awayWinsLabel.innerHTML = awayWins;
    homeTeamWins.innerHTML = homeWins;
    awayTeamWins.innerHTML = awayWins;
}
    

// When user clicks on "Play" button, roll the dice 
function playGame(home, away) {
    let roll1 = Math.floor(Math.random() * 6 + 1);
    let roll2 = Math.floor(Math.random() * 6 + 1);
    let rolls = [roll1, roll2]
    let die;
    let compareStat;
    homePlayerContainer.style.backgroundColor = "transparent";
    awayPlayerContainer.style.backgroundColor = "transparent";
    homeTeamPlayScreen.innerHTML = `${homeTeam.city}: `;
    awayTeamPlayScreen.innerHTML = `${awayTeam.city}: `;

    // loop for each individual die
    for (i = 0; i < rolls.length; i++) {
        if (i === 0) {
            die = die1;
        } else {
            die = die2;
        }
        
        // Change the dice image to the correct png file
        // Select players from each team based on the second die
        switch (rolls[i]) {
            case 1:
                die.src = "dice/dice1.png";
                // target players based on first die
                if (i === 0) {
                    selectedHome = homePG.value;
                    homePlayer.src = selectedHome.card;
                    selectedAway = awayPG.value;
                    awayPlayer.src = selectedAway.card;
                } else {
                    compareStat = "points";
                    homeStat.innerHTML = `Points: ${selectedHome.points}`;
                    awayStat.innerHTML = `Points: ${selectedAway.points}`;
                    compareStats(selectedHome.points, selectedAway.points)
                }
                break;
            case 2:
                die.src = "dice/dice2.png";
                if (i === 0) {
                    selectedHome = homeSG.value;
                    homePlayer.src = selectedHome.card;
                    selectedAway = awaySG.value;
                    awayPlayer.src = selectedAway.card;
                } else {
                    compareStat = "rebounds";
                    homeStat.innerHTML = `Rebounds: ${selectedHome.rebounds}`;
                    awayStat.innerHTML = `Rebounds: ${selectedAway.rebounds}`;
                    compareStats(selectedHome.rebounds, selectedAway.rebounds)
                }
                break;
            case 3:
                die.src = "dice/dice3.png";
                if (i === 0) {
                    selectedHome = homeSF.value;
                    homePlayer.src = selectedHome.card;
                    selectedAway = awaySF.value;
                    awayPlayer.src = selectedAway.card;
                } else {
                    compareStat = "assists";
                    homeStat.innerHTML = `Assists: ${selectedHome.assists}`;
                    awayStat.innerHTML = `Assists: ${selectedAway.assists}`;
                    compareStats(selectedHome.assists, selectedAway.assists)
                }
                break;
            case 4:
                die.src = "dice/dice4.png";
                if (i === 0) {
                    selectedHome = homePF.value;
                    homePlayer.src = selectedHome.card;
                    selectedAway = awayPF.value;
                    awayPlayer.src = selectedAway.card;
                } else {
                    compareStat = "steals";
                    homeStat.innerHTML = `Steals: ${selectedHome.steals}`;
                    awayStat.innerHTML = `Steals: ${selectedAway.steals}`;
                    compareStats(selectedHome.steals, selectedAway.steals)
                }
                break;
            case 5:
                die.src = "dice/dice5.webp";
                if (i === 0) {
                    selectedHome = homeC.value;
                    homePlayer.src = selectedHome.card;
                    selectedAway = awayC.value;
                    awayPlayer.src = selectedAway.card;
                } else {
                    compareStat = "blocks";
                    homeStat.innerHTML = `Blocks: ${selectedHome.blocks}`;
                    awayStat.innerHTML = `Blocks: ${selectedAway.blocks}`;
                    compareStats(selectedHome.blocks, selectedAway.blocks)
                }
                break;
            case 6:
                die.src = "dice/dice6.webp";
                if (i === 0) {
                    selectedHome = homeSG.value;
                    homePlayer.src = selectedHome.card;
                    selectedAway = awaySG.value;
                    awayPlayer.src = selectedAway.card;
                } else {
                    compareStat = "ppg"
                    homeStat.innerHTML = `PPG: ${selectedHome.ppg}`;
                    awayStat.innerHTML = `PPG: ${selectedAway.ppg}`;
                    compareStats(selectedHome.ppg, selectedAway.ppg)
                }
                break;
            default:
                break;
        }
        
    } 

    // open up the play screen
    playWindow.style.display = "flex";     
}

// close the play screen
function closePlayWindow() {
    playWindow.style.display = "none";
}
