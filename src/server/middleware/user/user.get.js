import models from './../../db/models/index';
import logger from './../../lib/winston.logger';

const userModel = models.userModel;

class UserGet {
    getById (req, res, next) {
        // If the user ID is undefined pass control to the this.getAll(req, res, next) method
        if (!req.params.id) {
            next();
        } else {
            userModel.findById(req.params.id, (err, users) => {
                if (err) {
                    logger.error(err);
                    res.status(404).end();
                }

                res.send(users);
            });
        }
    }

    getAll (req, res, next) {
        userModel.find({}, (err, users) => {
            if (err) {
                logger.error(err);
                res.status(404).end();
            }

            res.send(users);
        });
    }
}

export default new UserGet();
