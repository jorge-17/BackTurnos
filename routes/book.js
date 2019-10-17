var express = require('express');
var router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Turno = require('../models/Turno.js');
var Modulo = require('../models/Modulo.js');
var app = express();
var cors = require('cors');
var ip = require('ip');

router.options('/addTurno/:id', cors())
router.options('/:id', cors())

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));

var corsOptions = {
    origin: 'http://127.0.0.1:5501',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

/* GET ALL TURNOS */
router.get('/turnos', function (req, res, next) {
    Turno.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET ALL TURNOS */
router.get('/modulos', function (req, res, next) {
    Modulo.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET ALL TURNOS */
router.get('/ipAddress', function (req, res, next) {
    res.json(ip.address());
});

/* GET SINGLE TURNO BY ID */
router.get('/:id', cors(corsOptions), function (req, res, next) {
    Turno.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE TURNO */
router.post('/addTurno', function (req, res, next) {
    Turno.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE BOOK */
router.put('/addTurno/:id', cors(corsOptions), function (req, res, next) {
    console.log(req.body);    
    Turno.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE BOOK */
router.delete('/:id', function (req, res, next) {
    Turno.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;