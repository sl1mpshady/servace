var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
server.listen(3000)

var bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'servace'
});
 
db.connect();

io.on('connection', (socket) => {
	socket.on('get-cities-trigger', (data) => {
		db.query('SELECT * FROM cities WHERE province_id = ?', [data.id], (err, res) => {
			if(!err) {
				console.log(res)
				io.emit('get-cities-response', res)
			}
		})
	})
	socket.on('get-province-trigger', () => {
		db.query('SELECT * FROM provinces', (err, res) => {
			if(!err) {
				io.emit('get-province-response', res)
			}
		})
	})
})
