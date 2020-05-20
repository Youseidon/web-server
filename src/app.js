const path = require('path')
const express = require('express')

const app = express();

// Define paths for express config
const dirStaticPath = path.join(__dirname, '../public')
const viewDirectory = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewDirectory)

// Setup static directory to serve
app.use(express.static(dirStaticPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Yousef'
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        image: 'img/robot.png'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is a message for you to help. help. help. help',
        title: 'Help'
    })
})
app.get('/weather', (req, res) => {
    res.send({
        Naji: { name: 'salam', title: 'talam' },
        Nami: { name: 'khodafez', title: 'todafez' }
    })
})

app.listen(3000, () => {
    console.log('The server is up and running on port 3000.');
})