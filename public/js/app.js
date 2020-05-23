const getWeather = (address, result) => {
    const url = 'http://localhost:3000/weather?address=' + address + '';
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                result(data.error, undefined)
            } else {
                console.log(data)
                result(undefined, data)
            }
        })
    });
}
const weatherForm = document.querySelector("form");
const search = document.querySelector('input')
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = '';
messageTwo.textContent = '';
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value
    getWeather(location, (error, { forecast, temperature, humidity, location } = {}) => {
        if (error) {
            messageOne.textContent = error;
            console.log(error)
        } else {
            messageOne.textContent = location + ' ' + forecast;
            messageTwo.textContent = temperature + ' ' + humidity;
        }
    })

})