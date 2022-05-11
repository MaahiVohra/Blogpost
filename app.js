const express = require("express")
const bodyParser = require("body-parser")
const compose = require('./routes/compose')
const home = require('./routes/home')
const app = express()
const port = (process.env.PORT || 3000)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/compose', compose)
app.use('/', home)

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    console.log("homepage")
})

app.listen(port, ()=>{
    console.log("Listening at port ", port)
})