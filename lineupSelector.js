const team = require('./teamData.json')["manchesterunited"]
const fs = require('fs')

function getTheManager (team) {
    return team.find(person => {
        return person["position"] == "Manager";
    })
}





module.exports = {
    getTheManager: getTheManager
}