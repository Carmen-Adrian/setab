//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save_news = (req, res) => {
    const title = req.body.title;
    const image = req.body.image;
    const subtitle = req.body.subtitle;
    const category = req.body.category;
    const details = req.body.details;
    conexion.query('INSERT INTO noticias_setab SET ?', { title: title, image:image,subtitle: subtitle, category: category, details: details }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            //console.log(results);   
            res.redirect('/add-news');
        }
    });
};
//ACTUALIZAR un REGISTRO
exports.update_news = (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const image = req.body.image;
    const subtitle = req.body.subtitle;
    const category = req.body.category;
    const details = req.body.details;
    conexion.query('UPDATE noticias_setab SET ? WHERE id = ?', [{ title: title,  image:image, subtitle: subtitle, category: category, details: details }, id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/add-news');
        }
    });
   
};

exports.save_directory= (req, res) => {
    const loads = req.body.loads;
    const name = req.body.name;
    const cct = req.body.cct;
    const school = req.body.school;
    const municipality = req.body.municipality;
    const mail = req.body.mail;
    const telephone = req.body.telephone;
    const business_hours = req.body.business_hours;
    
    conexion.query('INSERT INTO directorio_escolar SET ?', { loads: loads, name: name, cct: cct, school: school, municipality: municipality, mail: mail, telephone: telephone, business_hours: business_hours }, (error, results1) => {
        if (error) {
            console.log(error);
        } else {
            console.log(results1);
            res.redirect('/add-directory');
        }
    });
};
//ACTUALIZAR un REGISTRO
exports.update_directory= (req, res) => {
    const id = req.body.id;
    const loads = req.body.loads;
    const name = req.body.name;
    const cct = req.body.cct;
    const school = req.body.school;
    const municipality = req.body.municipality;
    const mail = req.body.mail;
    const telephone = req.body.telephone;
    const business_hours = req.body.business_hours;
   
    conexion.query('UPDATE directorio_escolar SET ? WHERE id = ?', [{ loads: loads, name: name, cct: cct, school: school, municipality: municipality, mail: mail, telephone: telephone, business_hours: business_hours }, id], (error, results1) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/add-directory');
        }
    });
};

