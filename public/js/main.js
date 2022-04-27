console.log('Hello, world. Client side.');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const msgOne = document.querySelector('#msg-1');
const msgTwo = document.querySelector('#msg-2');


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const location = search.value;
    console.log(location);

    msgOne.textContent = 'Loading...';
    msgTwo.textContent = '';

    // Fetch api works in browser only, won't work in node.js.
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                msgOne.textContent = data.error;
            } else {
                console.log(data.location, data.forecast);
                msgOne.textContent = data.location;
                msgTwo.textContent = data.forecast;
            }
        });
    });
});