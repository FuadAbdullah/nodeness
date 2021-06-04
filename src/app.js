//TODO
// Create playlist
// Autoloop function

const player = require('play-sound')(opts = {})

player.play('./src/audio/test.mp3', { omxplayer: ['--vol', 550]}, function(err){
    if (err) throw err
  })