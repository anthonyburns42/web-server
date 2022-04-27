console.log('Hello, world. Client side.');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const location = search.value;
    console.log(location);

    // Fetch api works in browser only, won't work in node.js.
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data.location, data.forecast);
            }
        });
    });
});