const { Router } = require('express');
const router = Router();
const controlador1 = require('../Controllers/controlador1');

module.exports = (app) => {

    router.get('/saludoESP', controlador1.saludoESP);
    router.get('/saludoING', controlador1.saludoING);
    router.get('/saludoFRA', controlador1.saludoFRA);

    app.use('/', router);
};