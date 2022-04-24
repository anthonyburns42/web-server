const path = require('path');
const express = require('express');

const app = express();

// Setting up paths for public and templates (formerly views) folders
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setting up handlebars for express templating engine.
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// For static pages from the public folder
app.use(express.static(publicDirPath));

// For dynamic pages from the views folder
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Tom Magnum'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Rick Wright'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helping text.'
    });
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