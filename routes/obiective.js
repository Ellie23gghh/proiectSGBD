const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Salut de la ruta /api/obiective!');
});

module.exports = router;
 
