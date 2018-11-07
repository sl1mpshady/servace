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


db.connect()

io.on('connection', (socket) => {
	socket.on('get-cities-trigger', (data) => {
		db.query('SELECT * FROM cities WHERE province_id = ? ORDER BY name', [data.id], (err, res) => {
			if(!err) {
				io.emit('get-cities-response', res)
			}
		})
	})
	socket.on('get-province-trigger', () => {
		db.query('SELECT * FROM provinces ORDER BY name', (err, res) => {
			if(!err) {
				io.emit('get-province-response', res)
			}
		})
	})
	socket.on('get-barangay-trigger', (data) => {
		db.query('SELECT * FROM barangays WHERE city_id = ? ORDER BY name', [data.id], (err, res) => {
			if(!err) {
				io.emit('get-barangay-response', res)
			}
		})
	})
	socket.on('get-job-list-trigger', (data) => {
		db.query('SELECT * FROM jobs WHERE name like ? ', [ '%' + data.name + '%' ], (err, res) => {
			if(!err) {
				io.emit('get-job-list-response', res)

			}
		})
	})
	socket.on('apply-employee', (data) => {
		db.query('SELECT * FROM jobs WHERE name = ? ', [data.job], (err, res) => {
			if(!err) {
				
			}
		})
	})
})

