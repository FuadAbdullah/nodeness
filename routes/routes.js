const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../pages/index.html`));
    } catch (e) {
        console.error(e);
        res.status(400).send('Bad request');
    }
});

router.get('/player', async (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../pages/player.html`));
    } catch (e) {
        console.error(e);
        res.status(400).send('Bad request');
    }
});


module.exports = router;