const express = require('express')
const app = express()
const fs = require('fs')


app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const port = 6469
const ip = '127.0.0.1'


function save(title, data){
    fs.writeFileSync("documents/" + title + '.txt', data)

}

function load(title, data){
    let loadData = fs.readFileSync(title, data)
    console.log(loadData)
}


app.get('/', function(req,res){
    res.render('index.ejs')
})

app.post('/', function(req,res){
    res.render('index.ejs')
    
    let file = {
        name : req.body.name,
        data: req.body.data
    }

    console.log(file)

    save(file.name, file.data)

})




app.listen(port, ip, function(){
    console.log(`Server running on ${ip}:${port}`)
})





