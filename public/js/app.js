const getWeather = (address, result) => {
    const url = '/weather?address=' + address + '';
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                result(data.error, undefined)
            } else {
                result(undefined, data)
            }
        })
    });
}
const weatherForm = document.querySelector("form");
const search = document.querySelector('input')
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener('submit', (e) => {
    messageOne.textContent = '';
    messageTwo.textContent = '';
    e.preventDefault();
    const location = search.value
    getWeather(location, (error, { forecast, temperature, humidity, location } = {}) => {
        if (error) {
            messageOne.textContent = error;
        } else {
            messageOne.textContent = location + ' ' + forecast;
            messageTwo.textContent = temperature + ' ' + humidity;
        }
    })

})