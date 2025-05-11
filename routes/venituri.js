const express = require('express');
const router = express.Router();

// Ruta GET pentru a răspunde la cereri către /api/venituri
router.get('/', (req, res) => {
    res.send('Salut de la ruta /api/venituri!');
});

module.exports = router;
 
