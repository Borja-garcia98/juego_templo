

const mysql = require ('mysql');

const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'usuarios'
})

conection.connect(  (err) =>  {

    if(err) throw err 
    console.log('la conexion funciona')

})

const insertar = "INSERT INTO users (id, puntuacion) VALUES (NULL, 'OTRA PUNTUACION') "
conection.query(insertar, (err, rows )=> {

    if(err) throw err 
})

conection.query( 'SELECT * from users', (err, rows) => {

    if(err) throw err 

    console.log('los datos de la tabla son estos: ')
    console.log(rows)

    console.log('la cantidad de resultados es: ')
    console.log (rows.lenght) // numero de resultados que devuekve 

    
    const usuarioUno = rows[0]
   
   console.log(`El usuario tiene id ${usuarioUno.id} y tiene puntuacion ${usuarioUno.puntuacion}` ) // con mensaje  
//    console.log(usuarioUno.id) // capturar solo un usuario (sin mensaje como el de arriba) --> puedo acceder solo al dato que yo quiero ( id)
} )



conection.end()