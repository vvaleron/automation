import { Router } from 'express';
import api from './api';
import user from './user';

export default ({ config, db }) => {
	const router = Router();

	router.use('/api', api({ config, db }));

    user(router);

	return router;
}
