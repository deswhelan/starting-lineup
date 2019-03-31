const express = require('express')
const router = express.Router()
const squads = require('./teamData.json')
const fs = require('fs')
const pickAStartingEleven = require('./lineupSelector').pickAStartingEleven

router.get('/', function (req, res) {
    res.redirect('/squad')
})

router.get('/squad', function (req, res) {
    fs.readFile('./teamData.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('An Error Occured!')
        }
        res.render('players/squad', squads)
    })
})

router.get('/starting-line-up', function (req, res) {
    fs.readFile('./teamData.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('An Error Occured!')
        }
        res.render('players/lineup', pickAStartingEleven(squads["manchesterunited"]))
    })
})

module.exports = router;