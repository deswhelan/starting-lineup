const team = require('./teamData.json')["manchesterunited"]
const fs = require('fs')

function getPlayersByPosition (team, position) {
    return team.filter(player => {
        return player["position"] == position
    })
}

function randomizePlayers(players) {
    var currentIndex = players.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = players[currentIndex];
        players[currentIndex] = players[randomIndex];
        players[randomIndex] = temporaryValue;
    }
    return players
}

function selectPlayersByPosition (players, numberOfPlayersWanted) {
    return players.slice(0, numberOfPlayersWanted)
}

module.exports = {
    getPlayersByPosition: getPlayersByPosition,
    randomizePlayers: randomizePlayers,
    selectPlayersByPosition: selectPlayersByPosition
}