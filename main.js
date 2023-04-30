const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const port = 6469
const ip = '127.0.0.1'

app.get('/', function(req,res){
    res.render('index.ejs')
})


app.listen(port, ip, function(){
    console.log(`Server running on ${ip}:${port}`)
})





