
var express = require('express')
var app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.get('/', function (req, res) {
    var sql = require("mssql");

    var config = {
        user: 'Ken',
        password: '1234',
        server: 'DESKTOP-BRJAM44\\SQLEXPRESS',
        database: 'Devjobs_Database',
       
        options: {
            trustedConnection: true,
            trustServerCertificate: true
        }
    };

    sql.connect(config, function(err) {
        if(err) console.log(err);

        var request = new sql.Request();

        request.query('select * from dbo.Devjobs', function (err, recordset) {
            if (err) console.log(err)
            else {
                res.json({recordset});
            }
            
        })
    })
})

app.listen(5000, function() {
    console.log('Server is running...');
});
