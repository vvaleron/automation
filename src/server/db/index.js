import mongoose from 'mongoose';
import { dbConfig } from './../config.json';

const getUrl = (config) => {
    const url = config.url.replace('<user>', config.user);

    return url.replace('<password>', config.password);
};

export default (callback) => {
    const url = getUrl(dbConfig);
    const db = mongoose.connect(url);


	callback(db);
};
