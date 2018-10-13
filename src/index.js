import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import initializeDb from './server/db';
import middleware from './server/middleware';
import config from './server/config.json';
import logger from './server/lib/winston.logger';

let app = express();
app.server = http.createServer(app);
// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.use(express.static('src/client'));

// connect to db
initializeDb( (db) => {

	// internal middleware
	app.use(middleware({ config, db }));

	app.server.listen(process.env.PORT || config.port);
    const startedInfo = `Started on port ${app.server.address().port}`;

    logger.info(' ');
    logger.info('---------------------------');
    logger.info(startedInfo);
    logger.info('---------------------------');
    logger.info(' ');

});


export default app;
