const express = require('express')
const router = express.Router()
const teamData = require('./teamData.json')
const fs = require('fs')

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
        res.render('players/lineup', teamData)
    })
})

module.exports = router;