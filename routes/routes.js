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

router.post('/wizard-game', (req, res) => {
    try {
        const numPlayers = parseInt(req.body.numPlayers);
        let playerNames = [];

        for (let i = 1; i <= numPlayers; i++) {
            const playerName = req.body[`player${i}`];
            playerNames.push(playerName);
        }

        console.log('Player Names: ', playerNames);

        const maxRounds = 60 / numPlayers;

        const round = 1;

        res.render('wizard-game', { numPlayers, playerNames, round, maxRounds });
    } catch (error) {
        console.log(error);
        res.status(500).send(`ERROR: ${error}`);
    }
})

router.post('/collect-wizard-bids', (req, res) => {
    try {
        const numPlayers = parseInt(req.body.numPlayers);
        const playerNames = req.body.playerNames;
        const round = parseInt(req.body.round);
        const maxRounds = parseInt(req.body.maxRounds);
        const bids = [];

        for (let i = 1; i <= numPlayers; i++) {
            const bid = parseInt(req.body[`bid${i}`]);
            bids.push(bid);
        }

        console.log('Bids: ', bids);

        res.render('wizard-game', { numPlayers, bids, round, maxRounds, playerNames });
    } catch (error) {
        console.log(error);
        res.status(500).send(`ERROR: ${error}`);
    }
})

module.exports = router