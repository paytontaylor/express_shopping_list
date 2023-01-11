const express = require('express')
const router = new express.Router()
const items = require('./fakeDb')

router.get('/', (req, res) => {
    return res.json(items)
})

module.exports = router