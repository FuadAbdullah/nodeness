const express = require('express');
const router = express.Router();

router.get('/audio/play/tanjironouta', async (req, res) => {
    try {
        setTimeout(() => {
            const playTanjiroNoUta = require('../script/tanjiro_no_uta');
        }, 100);
        res.redirect('/player');
    } catch (e) {
        console.error(e);
        res.status(400).send(`${e}`);
    }
});

router.get('/audio/play/shinobutheme', async (req, res) => {
    try {
        const {
            playShinobuTheme
        } = require('../script/shinobu_theme');
        res.status(200).send();
    } catch (e) {
        console.error(e);
        res.status(400).send(`${e}`);
    }
});

router.get('/audio/stop', async (req, res) => {
    try {
        setTimeout(() => {
            const stopAll = require('../script/stop_all');
        }, 100);
        res.status(200).send();
    } catch (e) {
        console.error(e);
        res.status(400).send(`${e}`);
    }
});

module.exports = router;