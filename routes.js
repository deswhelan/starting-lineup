const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send("hey ho let's go")
  })

module.exports = router;