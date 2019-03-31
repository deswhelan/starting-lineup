const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send("hey ho let's go")
})

router.get('/starting-line-up', function (req, res) {
    res.send("here are 11 players")
})

router.get('/squad', function (req, res) {
    res.send("here is the whole squad")
})

module.exports = router;