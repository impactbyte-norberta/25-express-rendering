const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;
const path = require('path');

// Read external files/folders
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.send('Hello');
});

// Menampilkan file HTML
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/products.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`);
});
