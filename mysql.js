

const mysql = require ('mysql');

const conection = mysql.createConnection({
    host:'localhost',
    user:'Borja',
    password:'Borja',
    database: 'usuarios'



})

conection.connect(  (err) =>  {

    if(err) throw err 
    console.log('la conexion funciona')

})