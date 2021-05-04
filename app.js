var express = require('express')
var app = express();
var bodyParser = require('body-parser')

app.listen(3000, function() {
    console.log('server listen')
})

app.get('/sub123.html?name=1', function(req, res) {
    res.send('<h1>asdasdasd11111111</h1>')
})

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(express.json())

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})



app.post('/ajax_senda', function(req, res) {
    console.log(req.body)
    
})


app.post('/ajax_send', function(req, res) {
    console.log(req.body)
    var result = {'aa':'bb', 'bb': req.body.email}
    res.json(result)
})



