import * as db from './database.js';
import bcrypt from 'bcrypt';
import express from 'express';
import cors from 'cors';

// Middleware Junk
const app = express();
const corsOptions = {
    origin: ['http://localhost:5173'],
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to DB and initialize user object
db.connectDB();
db.initUser();

// Now handle get/post requests and such.
app.post('/signup', async (req, res) => {
    try {
        console.log('post request recieved')
        const {userName, email, plaintext} = req.body; 
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(plaintext, salt);    

        const newUser = await db.saveUser(userName, email, salt, hash);

        res.status(201).json({ message: 'User created successfully', user: newUser  });
    } catch(error) {
	    console.log('Error when creating user: ', error);
	    res.status(500).json({ message: 'Failed to create user: ', error: error.message });
    }
});


// Start backend on port 8080
app.listen(8080, () => {
    console.log('Server started on port 8080');
})

