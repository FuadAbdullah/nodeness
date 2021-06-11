const shelljs = require('shelljs');
const stopAll = shelljs.exec(`sh ${__dirname}/stop_all.sh`);


module.exports = stopAll;