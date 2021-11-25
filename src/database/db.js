const mysql = require('mysql');
const conexion = mysql.createConnection({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'bcf1f1d3bc7a77',
  password: 'a7b5b9a3',
  database: 'heroku_2d29af44b3c41aa'
});
conexion.connect((error) => {
  if (error) {
    console.error('El error de conexión es: ' + error);
    return;
  }
  console.log('¡Conectado a la Base de Datos!');
});
module.exports = conexion;

//DATABASE_URL: mysql://bcf1f1d3bc7a77:a7b5b9a3@us-cdbr-east-04.cleardb.com/heroku_2d29af44b3c41aa?reconnect=true