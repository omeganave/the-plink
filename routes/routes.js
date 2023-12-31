const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.log(error);
        res.status(500).send(`ERROR: ${error}`);
    }
});

router.get('/wizard', (req, res) => {
    try {
        res.render('wizard');
    } catch (error) {
        console.log(error);
        res.status(500).send(`ERROR: ${error}`);
    }
});

module.exports = router