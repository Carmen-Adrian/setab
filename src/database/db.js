const mysql = require('mysql');
const conexion = mysql.createConnection({
  host: '192.168.4.221',
  user: 'root',
  password: '',
  database: 'setab'
});
conexion.connect((error) => {
  if (error) {
    console.error('El error de conexión es: ' + error);
    return;
  }
  console.log('¡Conectado a la Base de Datos!');
});
module.exports = conexion;
