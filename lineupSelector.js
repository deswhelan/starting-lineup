function getPlayersByPosition (squad, position) {
    return squad.filter(player => {
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

function pickAStartingEleven (squad, def, mid, fw){
    return {
        Manager: getPlayersByPosition(squad, "Manager"),
        Goalkeeper: selectPlayersByPosition(randomizePlayers(getPlayersByPosition(squad, "GK")) , 1),
        Defenders: selectPlayersByPosition(randomizePlayers(getPlayersByPosition(squad, "DF")) , def),
        Midfielders: selectPlayersByPosition(randomizePlayers(getPlayersByPosition(squad, "MF")) , mid),
        Forwards: selectPlayersByPosition(randomizePlayers(getPlayersByPosition(squad, "FW")) , fw)
    }
}

module.exports = {
    pickAStartingEleven: pickAStartingEleven
}