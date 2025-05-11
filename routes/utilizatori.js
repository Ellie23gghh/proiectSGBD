const express = require('express');
const router = express.Router();
const db = require('../db'); // dacă ai fișierul db.js

router.get('/', async (req, res) => {
    try {
        const connection = await db.getConnection();
        const result = await connection.execute('SELECT * FROM utilizatori');
        await connection.close();
        console.log(result.rows); // Adăugăm un log pentru a vedea datele returnate
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Eroare la preluarea utilizatorilor');
    }
});

module.exports = router;
