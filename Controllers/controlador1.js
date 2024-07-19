'use strict';
module.exports = {
    async saludoESP(req, res) {
        try {
            const saludo = "¡Hola, Mundo!";
            res.status(200).json({ saludo });
        } catch (error) {
            console.error('Error al generar el saludo:', error);
            res.status(500).json({ error: 'Error al generar el saludo' });
        }
    },

    async saludoING(req, res) {
        try {
            const saludo = "Hello, World!";
            res.status(200).json({ saludo });
        } catch (error) {
            console.error('Error al generar el saludo en inglés:', error);
            res.status(500).json({ error: 'Error al generar el saludo en inglés' });
        }
    },

    async saludoFRA(req, res) {
        try {
            const saludo = "Bonjour, le Monde!";
            res.status(200).json({ saludo });
        } catch (error) {
            console.error('Error al generar el saludo en francés:', error);
            res.status(500).json({ error: 'Error al generar el saludo en francés' });
        }
    },
};
