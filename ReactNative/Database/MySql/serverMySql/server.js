const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const hostName = 'sql10.freemysqlhosting.net';
const userName = 'sql10694828';
const userPwrd = 'PijvP9aF2j';
const databaseName = 'sql10694828';
const databaseDialect = 'mysql';


const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const db = mysql.createConnection({
    host: hostName,
    user: userName,
    password: userPwrd,
    database: databaseName,
    dialect: databaseDialect
})

db.connect((err) => {
    var msgResp = '\nDatabase connection:\t';
    if(err) {
        msgResp += 'Error\n\t';
        throw err;
    }else{
        msgResp += 'Online\n\t';
    }
    msgResp += 'Host:\t\t' + hostName + '\n\tDatabase:\t' + databaseName + '\n\tUser:\t\t' + userName;
    console.log(msgResp);
});


app.get('/', (re, res) => {
    return res.json("Server side: online");
})

app.get('/usuarios', (request, response) => {
    const sql = "SELECT * FROM usuarios";
    db.query(sql, (err, data) => {
        if(err) {
            return response.json(err);
        }
        return response.json(data);
    })
})

app.listen(8081, () => {
    console.log('\nListening on port:\t8081');
})


/* 
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : hostName,
    user     : 'sql10694828',
    password : 'PijvP9aF2j',
    database : 'sql10694828'
});
 
pool.query("SELECT * FROM usuarios",(err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows fetch
    console.log(data);
});

*/