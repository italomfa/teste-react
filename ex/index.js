 /*import com caminho relativo. 
Obs: se for dentro de node_modules não há necessidade de usar o caminho relativo*/
const funcaoLogger = require('./logger.js');

funcaoLogger.info('usando o padrão CommonJS!');