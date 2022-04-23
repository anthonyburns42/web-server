const express = require('express');

const app = express();

// Setting up the routes to the different pages in the browser.

// For index page leave blank in quotes.
app.get('', (req, res) => {
    // Can send HTML
    // res.send('<h1>Weather Main Page</h1>');
    // Can send JSON as well
    res.send({
        name: 'Thomas',
        age: 42
    });
});

// For additional pages, /name.
app.get('/help', (req, res) => {
    res.send('Help page.');
});

app.get('/about', (req, res) => {
    res.send("<h1>About Tony's Weather App</h1>");
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