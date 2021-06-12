const express = require('express');
const router = express.Router();

router.get('/audio/play/tanjironouta', async (req, res) => {
    try {
        require('../script/tanjiro_no_uta');
        delete require.cache[require.resolve('../script/tanjiro_no_uta')]
        res.redirect('/player?title=Now%20Playing:%20Tanjiro%20no%20Uta&songTitle=tanjiro');
    } catch (e) {
        console.error(e);
        res.status(400).send(`${e}`);
    }
});

router.get('/audio/play/shinobunouta', async (req, res) => {
    try {
        require('../script/shinobu_no_uta');
        delete require.cache[require.resolve('../script/shinobu_no_uta')]
        res.redirect('/player?title=Now%20Playing:%20Shinobu%20no%20Uta&songTitle=shinobu');
    } catch (e) {
        console.error(e);
        res.status(400).send(`${e}`);
    }
});

router.get('/audio/stop', async (req, res) => {
    try {
        var omxplayerKiller = require('../script/stop_player');
        omxplayerKiller.find(req.query.songTitle);
        delete require.cache[require.resolve('../script/stop_player')]
        res.redirect('/');
    } catch (e) {
        console.error(e);
        res.status(400).send(`${e}`);
    }
});

module.exports = router;