import mongoose from 'mongoose';

export async function connectDB() {
    try {
	// Connect to DB at MONGODB_URI (from .env)
	const uri = process.env.MONGODB_URI;
	await mongoose.connect(uri);
	console.log('Successfully connected to Database');
    } catch(err) {
	console.log('Error when connecting to Database');
	console.log(err);
    }
};

export function initUser() {
    // Create structure of user object
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

    // Initialize User object for mongoose
    const User = mongoose.model('User', userSchema);
};

export async function saveUser(userName, email, salt, hash) {
    // Create new user from parameters and save to batabase.
    const user = new User({userName, email, salt, hash});
    await user.save();
};
