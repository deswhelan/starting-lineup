const express = require('express')
const router = express.Router()
const teamData = require('./teamData.json')
const fs = require('fs')
const lineupSelector = require('./lineupSelector')

router.get('/', function (req, res) {
    res.redirect('/squad')
})

router.get('/squad', function (req, res) {
    fs.readFile('./teamData.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('An Error Occured!')
        }
        res.render('players/squad', teamData)
    })
})

router.get('/starting-line-up', function (req, res) {
    fs.readFile('./teamData.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('An Error Occured!')
        }

        var startingEleven = {
            Manager: lineupSelector.getPlayersByPosition(teamData["manchesterunited"], "Manager"),
            Goalkeeper: lineupSelector.selectPlayersByPosition(lineupSelector.getPlayersByPosition(teamData["manchesterunited"], "GK"), 1),
            Defenders: lineupSelector.selectPlayersByPosition(lineupSelector.getPlayersByPosition(teamData["manchesterunited"], "DF"), 4),
            Midfielders: lineupSelector.selectPlayersByPosition(lineupSelector.getPlayersByPosition(teamData["manchesterunited"], "MF"), 3),
            Forwards: lineupSelector.selectPlayersByPosition(lineupSelector.getPlayersByPosition(teamData["manchesterunited"], "FW"), 3),
        }
        res.render('players/lineup', startingEleven)
    })
})

module.exports = router;