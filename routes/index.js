const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Hello from Router Folder!') 
})

router.get('/home', (req, res, next) => {
    res.render('home', null)
})

router.get('/json', (req, res, next) => {
    const data = {
        greet: 'Hello in JSON Format'
    }

    res.json(data)
})

module.exports = router;