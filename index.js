const express = require('express');
const app = express();


const utilizatoriRoutes = require('./routes/utilizatori');
const obiectiveRoutes = require('./routes/obiective');
const venituriRoutes = require('./routes/venituri'); 


app.use(express.json());

app.use('/api/utilizatori', utilizatoriRoutes);
app.use('/api/obiective', obiectiveRoutes);
app.use('/api/venituri', venituriRoutes); 

app.listen(3000, () => {
    console.log('Serverul rulează pe portul 3000');
});
 
