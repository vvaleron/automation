import Schemas from './../schemas';
import mongoose from 'mongoose';

export default {
    userModel: mongoose.model('User', Schemas.userSchema)
};