const express = require('express')
const router = express.Router()

var parcel = []

router.get('/', (req, res)=>{
    res.render('compose')
})

router.post('/', (req, res)=>{
    parcel.push(req.body)
})

module.exports = router
module.exports.parcel = parcel

