const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.render('index', {
            indexTitle: 'Nodeness',
            tanjiroURL: '/audio/play/tanjironouta',
            shinobuURL: '/audio/play/shinobunouta'
        });
    } catch (e) {
        console.error(e);
        res.status(400).send('Bad request');
    }
});

router.get('/player', async (req, res) => {
    try {
        res.render('player', {
            playerTitle: `${req.query.title}`,
            songTitle: `/audio/stop?songTitle=${req.query.songTitle}`
        });
    } catch (e) {
        console.error(e);
        res.status(400).send('Bad request');
    }
});


module.exports = router;