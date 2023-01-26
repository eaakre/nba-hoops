let sortDirection = false;
let teamData = team;
let westernData = [];
let easternData = [];
let leagueData;

for (let team of teamData) {
    if (team.conference === "West") {
        westernData.push(team);
    } else {
        easternData.push(team);
    }
}

window.onload = () => {
    loadStandings(teamData);
}

function loadStandings(teamData) {
    const tableBodyWest = document.getElementById('western');
    const tableBodyEast = document.getElementById('eastern');
    let dataHtmlWest = '';
    let dataHtmlEast = '';

    for(let team of teamData) {
        if (team.conference === "West") {
            dataHtmlWest += `<tr><td>${team.city}</td><td>${team.wins}</td><td>${team.losses}</td></tr>`
        } else {
            dataHtmlEast += `<tr><td>${team.city}</td><td>${team.wins}</td><td>${team.losses}</td></tr>`
        }
    }

    // Trying to disconnect east and west conferences
    // for (let team of westernData) {
    //     dataHtmlWest += `<tr><td>${team.city}</td><td>${team.wins}</td><td>${team.losses}</td></tr>`;
    // }

    // for (let team of easternData) {
    //     dataHtmlEast = `<tr><td>${team.city}</td><td>${team.wins}</td><td>${team.losses}</td></tr>`;
    // }
    
    tableBodyWest.innerHTML = dataHtmlWest;
    tableBodyEast.innerHTML = dataHtmlEast;
}

function sortColumn(columnName, conference) {
    
    if (conference === 'western') {
        leagueData = westernData;
    } else {
        leagueData = easternData;
    }
    const dataType = typeof teamData[0][columnName];
    sortDirection = !sortDirection;

    switch(dataType) {
        case 'number':
            sortNumberColumn(sortDirection, columnName);
            break;
        default:
            break;
    }

    loadStandings(teamData)

    // Trying to disconnect eastern and western conferences
    // const dataType = typeof leagueData[0][columnName];
    // sortDirection = !sortDirection;

    // switch(dataType) {
    //     case 'number':
    //         sortNumberColumn(sortDirection, columnName);
    //         break;
    //     default:
    //         break;
    // }

    // loadStandings(leagueData)
    // console.log(leagueData)

}

function sortNumberColumn(sort, columnName) {

    teamData = teamData.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    })
}


