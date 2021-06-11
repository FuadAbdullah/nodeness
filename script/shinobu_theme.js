const shelljs = require('shelljs');
const shinobuTheme= shelljs.exec(`sh ${__dirname}/shinobu_theme.sh`);


module.exports = shinobuTheme;