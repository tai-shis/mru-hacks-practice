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
