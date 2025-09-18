import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    userName: {
            type: String,
            unique: true,
    },
    email: {
            type: String,
            unique: true,
    },
    salt: {
            type: String
    },
    hash: {
            type: String
    }
});

export const User = mongoose.model('User', userSchema);

export async function saveUser(userName, email, salt, hash) {
    // Create new user from parameters and save to batabase.
    const user = new User({userName, email, salt, hash});
    await user.save();
};