const team = require('./teamData.json')["manchesterunited"]
const fs = require('fs')

function getPlayersByPosition (team, position) {
    return team.filter(player => {
        return player["position"] == position
    })
}

module.exports = {
    getPlayersByPosition: getPlayersByPosition
}