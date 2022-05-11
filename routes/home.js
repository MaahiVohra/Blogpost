const express = require('express')
const router = express.Router()
const compose = require('./compose')
const parcel = compose.parcel

router.get('/', (req, res)=>{
    res.render('home', {parcel: parcel})
})

module.exports = router