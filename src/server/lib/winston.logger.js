import winston from 'winston';
import fs from 'fs';

const env = process.env.NODE_ENV || 'development';
const logDir = 'log';

class Logger {
    constructor () {
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir);
        }

        return new (winston.Logger)({
            transports: [
                // colorize the output to the console
                new (winston.transports.Console)({
                    timestamp: this.tsFormat,
                    colorize: true,
                    level: 'info'
                }),
                new (require('winston-daily-rotate-file'))({
                    filename: `${logDir}/-results.log`,
                    timestamp: this.tsFormat,
                    datePattern: 'yyyy-MM-dd',
                    prepend: true,
                    level: env === 'development' ? 'verbose' : 'info'
                })
            ]
        });
    }

    tsFormat () {
        return (new Date()).toLocaleTimeString();
    }
}

// logger.info(' ');
// logger.debug('Debugging info');
// logger.verbose('Verbose info');
// logger.warn('Warning message');
// logger.error('Error info');

export default new Logger();