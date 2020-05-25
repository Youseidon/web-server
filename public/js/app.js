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
const result = document.querySelector("#result");

weatherForm.addEventListener('submit', (e) => {
    result.textContent = "";
    e.preventDefault();
    const location = search.value
    getWeather(location, (error, { forecast, temperature, humidity, location, wind_speed } = {}) => {
        const div = document.createElement('div');
        const header = document.createElement('h2');
        if (error) {
            header.textContent = error;
        } else {
            header.textContent = location;
            const ul = document.createElement('ul');
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            const li4 = document.createElement('li');
            li1.textContent = 'The weather is ' + forecast;
            li2.textContent = 'The Temprature is:' + temperature;
            li3.textContent = 'The Humidity is:' + humidity;
            li4.textContent = 'The Wind Speed is:' + wind_speed;
            ul.appendChild(li1).appendChild(li2).appendChild(li3).appendChild(li4);
            div.appendChild(ul);
        }
        result.appendChild(header);
        result.appendChild(div);
    })

})