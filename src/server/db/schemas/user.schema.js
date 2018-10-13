// grab the things we need
import { Schema } from 'mongoose';

class UserSchema extends Schema {
    constructor () {
        super({
            name: String,
            username: {type: String, required: true, unique: true},
            password: {type: String, required: true},
            admin: Boolean,
            location: String,
            meta: {
                age: Number,
                website: String
            },
            created_at: Date,
            updated_at: Date
        });

        Object.assign(this.methods, {
            say: this.say
        });
    }

    say (prop) {
        return this[prop];
    }
}

export default UserSchema;