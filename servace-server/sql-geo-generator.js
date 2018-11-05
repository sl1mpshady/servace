var mysql = require('mysql')

var sdb = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'philGeo'
})

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'servace'
})


sdb.connect() 
db.connect()
// sdb.query('SELECT * FROM provinces', (err, res) => {
// 	res.map( (item, index) => {
// 		db.query('INSERT INTO provinces(name) VALUES(?)', [item.provDesc], (err, res) => {
// 			if(!err) {
// 				console.log("province insert success: " + index)
// 			}
// 		})
// 	})
// })

// sdb.query('SELECT b.id, b.citymunDesc, a.id AS province_id, b.citymunCode  FROM provinces a, citymun b WHERE a.provCode = b.provCode ', (err, res) => {
// 	// console.log(res[0].id)
// 	// console.log(res[0].citymunDesc)
// 	// console.log(res[0].province_id)
// 	res.map( (item, index) => {
// 		db.query('INSERT INTO cities(id, name, province_id) VALUES(?, ?, ?)', [item.citymunCode, item.citymunDesc, item.province_id], (err, res) => {
// 			if(!err) {
// 				console.log("city insert success: " + index)
// 			} else {
// 				console.log(err)
// 			}
// 		})
// 	})
// })


sdb.query('SELECT b.brgyCode, b.brgyDesc, a.citymunCode as city_id FROM citymun a, barangays b WHERE a.citymunCode = b.citymunCode', (err, res) => {
	
	//console.log(res)
	res.map( (item, index) => {
		db.query('INSERT INTO barangays(id, name, city_id) VALUES(?, ?, ?)', [item.brgyCode, item.brgyDesc, item.city_id], (err, res) => {
			if(!err) {
				console.log("barangay insert success: " + index)
			}
		})
	})
})