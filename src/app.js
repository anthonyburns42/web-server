const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Setting up paths for public and templates (formerly views) folders
// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setting up handlebars for express templating engine and views location.
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// For static pages from the public folder.
app.use(express.static(publicDirPath));

// For dynamic pages from the views folder.
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
        title: 'Help',
        name: 'TC Calvin',
        helpText: 'This is some helping text.'
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide an address."
        });
    }

    geocode(req.query.address, (error, data) => {
        if (error) {
            return res.send({
                error: error
            });
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error: error
                });
            }
            res.send({
                forecast: forecastData,
                location: data.location,
                address: req.query.address
            });
        });
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term."
        });
    }

    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help 404',
        name: 'Kumu Tuileta',
        errorMsg: 'Help article not found.'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Juliet Higgins',
        errorMsg: 'Page not found.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});