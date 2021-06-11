const shelljs = require('shelljs');
const tanjiroNoUta = shelljs.exec(`sh ${__dirname}/tanjiro_no_uta.sh`);


module.exports = tanjiroNoUta;