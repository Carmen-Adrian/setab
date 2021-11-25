const { json } = require('express');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const multer = require('multer');
const mimeTypes = require('mime-types');
const fs = require("fs");

const storage= multer.diskStorage({
    destination: 'src/public/uploads/',
    filename: function(req,file,cb){
        cb("", file.originalname );
    }
})

const upload= multer({
    storage: storage
})


//setting
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express(json));

app.post("/files",upload.single('imagen'),(req,res)=>{
    res.redirect("/anadir-news")
});
app.post("/files1",upload.single('imagen'),(req,res)=>{
    res.redirect("/anadir-directory")
});

// middlewares
dotenv.config({path: './env/.env'})
app.use(morgan('dev'));
app.use(cookieParser())
// routes
app.use(require('./routes/router'));

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});
//static files
app.use(express.static(path.join(__dirname, 'public')));
//Creacion de una variable para el puerto
var http = require("http").createServer(app);
//escuchando el servidor
http.listen(4200, function () {
    console.log('Servidor corriendo en el puerto: http://localhost:4200');
})