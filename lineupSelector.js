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
    console.log("Randomized players: ", players)
    return players
}

module.exports = {
    getPlayersByPosition: getPlayersByPosition,
    randomizePlayers: randomizePlayers
}