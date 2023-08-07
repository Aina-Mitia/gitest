const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
//const Employee = mongoose.model('Employee');
//const Staff = mongoose.model('Staff');
//var school = require('./models/dataprof')
const Staff = require('../models/dataprof.ts').Staff
//var school=mongoose.model('school');

const app = express();
const port = 5000;


router.get('/', (req, res) => {
    res.render("/", {
        viewTitle: "Insert staff"
    });
}); 

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


/*function insertRecord(req, res) {
    var Staff = new Staff();
    var entrer = Staff.findOne(req.body.id); //tsy mety
    Staff.name = req.body.name;
    Staff.firstName = req.body.firstName;
    Staff.email = req.body.email;
    Staff.sex = req.body.sex;
    Staff.categorie = req.body.categorie;
    Staff.password = req.body.password;
    Staff.id = req.params.id; 
    if ( Staff.id ==entrer ) {
    Staff.save((err, doc) => {
        if (!err)
            res.redirect('/'); //routena
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("/", { //envoye erreur, mila ampiana
                    viewTitle: "Insert staff",
                    Staff: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    })}
     else {
       // Staff.params.id = school.params.id ;
       Staff.updateOne(Staff)
    } 
}
*/

function insertRecord(req, res) {
    // Stockage des données dans le constructeur
    var staff = new Staff(req.body)
    var entrer = Staff.findOne(req.body._id);
    if ( Staff._id ==entrer ) {
  
    // Requête Mongoose - https://mongoosejs.com/docs/api.html#document_Document-save
    return staff
      .save()
      .then(() => {
        res
          .status(201)
          .json({ message:'created' })
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.status(409).json({ message: 'this address email already existing' })
        } else if (
          err.errors &&
          Object.keys(err.errors).length > 0 &&
          err.name === 'ValidationError'
        ) {
          res.status(422).json({ message: err.message })
        } else {
          res.status(500).json(err)
        }
      })
    }
  }

router.get('/list', (req, res) => {
    Staff.find((err, docs) => {
        if (!err) {
            res.render("/", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving staff list :' + err);
        }
    });
});


function handleValidationError(err, body) {
    var field:any; //nampiana
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'name':
                body['name'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

function updateRecord(req, res) {
    Staff.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/'); }  //affichage liste
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("/", {
                    viewTitle: 'Update staff',
                    staff: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });   
}

router.get('/:id', (req, res) => {
    Staff.findById(req.params._id, (err, doc) => {
        if (!err) {
            res.render("employee/addOrEdit", {
                viewTitle: "Update staff",
                  staff: doc
            });
        }
    });
});


router.get('/delete/:id', (req, res) => {
    Staff.findByIdAndRemove(req.params._id, (err, doc) => {
        if (!err) {
            res.redirect('/');
        }
        else { console.log('Error in staff delete :' + err); }
    });
});

module.exports = router;


app.listen(port, () => {
    console.log(`Le serveur lancer sur le port: http://localhost:${port}`);
});
