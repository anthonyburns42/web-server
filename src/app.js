const path = require('path');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');

// setting up handlebars for express templating engine.
app.set('view engine', 'hbs')

// For static pages from the public folder
app.use(express.static(publicDirPath));

// For dynamic pages from the views folder
app.get('', (req, res) => {
    res.render('index');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is 72 degrees.',
        location: 'Perry, GA'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});