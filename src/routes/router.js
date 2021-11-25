const express = require('express');
const router = express.Router();
const conexion = require('../database/db');
const authController = require('../controllers/authcontroller');

//router index
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM noticias_setab ORDER BY id  DESC LIMIT 3 ', (error, results) => {
        if (error) {
            throw error;
        } else {
            
            res.status(200).render('index', { results: results, noticias: results[0] });
        }
    })
});
//router quienes somos
router.get('/about-us', (req, res) => {
    res.render('about-us');
});
//router de te puede interesar
router.get('/interesar', (req, res) => {
    conexion.query('SELECT rand() FROM noticias_setab', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('interesar', {noticia: results });
        }
    })
});
//router detalles
router.get('/details/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM noticias_setab WHERE id=? ', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('details', { noticias: results[0], results: results });
        }
    });
});
//router restablecer contraseña
router.get('/forgot-password', (req, res) => {
    res.render('forgot-password');
});
//router login 
router.get('/login', (req, res) => {
    res.render('login', { alert: false })
});
//router login admin
router.get('/login-admin', authController.isAuthenticated, (req, res) => {
    res.render('login-admin', { user: req.user })
})
//router mostrar mas
router.get('/show-more',  (req, res) => {
    var sql = 'SELECT * FROM noticias_setab ORDER BY id  ASC LIMIT 3,3'
    conexion.query(sql, (error, results) => {
        if (error) {
            throw error;
        } else {
            
            res.render('show-more', { results: results, noticias: results[0], user: req.user });
        }
    })
});
//seccion de router de noticias
//router mostrar noticias
router.get('/add-news', authController.isAuthenticated, (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM noticias_setab', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('add-news', { results: results, noticias: results[0], user: req.user });
        }
    })
});
//router editar noticia
router.get('/edit-news/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    conexion.query('SELECT * FROM noticias_setab WHERE id = ?', [id], (error, results) => {
        if (error) {
        } else {
            res.status(200).send(results[0]);
        }
    })
});
//router eliminar noticia
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM noticias_setab WHERE id = ?', [id], (error, results) => {
        if (error) {
        } else {
            res.redirect('/add-news');
        }
    })
});
//seccion directorio
//router de mostrar directorio
router.get('/directory', (req, res) => {
    conexion.query('SELECT * FROM directorio_escolar ', (error, results1) => {
        if (error) {
            throw error;
        } else {
            res.render('directory', { results1: results1 });
        }
    })
});
//router anadir un nuevo directorio
router.get('/add-directory', authController.isAuthenticated, (req, res) => {
    conexion.query('SELECT * FROM directorio_escolar ', (error, results1) => {
        if (error) {
            throw error;
        } else {
            res.render('add-directory', { results1: results1, directorio_escolar: results1[0], user: req.user });
        }
    })
});
//router editar directorio
router.get('/edit-directory/:id', authController.isAuthenticated, (req, res) => {
    const id = req.params.id;
    console.log(id);
    conexion.query('SELECT * FROM directorio_escolar WHERE id=?', [id], (error, results1) => {
        console.log(results1);
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(results1[0]);
        }
    })
});
//router elimnar directorio
router.get('/delete1/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM directorio_escolar WHERE id = ?', [id], (error, results1) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/add-directory');
        }
    })
});
//constante donde se manda a requerir el crud
const crud = require('../controllers/crud');
//router guardar noticas
router.post('/save_news', crud.save_news);
//router actualizar noticia
router.post('/update_news', crud.update_news);
//router guardar directorio
router.post('/save_directory', crud.save_directory);
//router actualizar directorio
router.post('/update_directory', crud.update_directory);
//router de registro de usuarios
router.post('/register', authController.register);
//router de logeo de usuario
router.post('/login', authController.login);
//router de salir del logeo
router.get('/logout', authController.logout);
//modulo donde se exporta el router ,donde los requere el index.js
module.exports = router;