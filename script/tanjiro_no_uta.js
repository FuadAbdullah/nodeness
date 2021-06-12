var module = 'omxplayer';
var script = `${__dirname}/../assets/audio/tanjiro.mp3`;

const exec = require('child_process').exec;
const createChild = exec(`${module} ${script}`);
console.log(`Child PID: ${createChild.pid}`);
