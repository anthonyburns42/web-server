console.log('Hello, world. Client side.');

// Fetch api works in browser only, won't work in node.js.
fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data.location, data.forecast);
        }
    });
});