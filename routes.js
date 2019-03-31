const express = require('express')
const router = express.Router()
const teamData = require('./teamData.json')

router.get('/', function (req, res) {

    res.sendFile(__dirname + teamData["manchester united"][25]["picture"])
})

router.get('/starting-line-up', function (req, res) {
    res.send("here are 11 players")
})

router.get('/squad', function (req, res) {
    res.send("here is the whole squad")
})

module.exports = router;