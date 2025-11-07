import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();

connectDB();

if(process.env.NODE_ENV !== 'production') {
    app.use(cors({
        origin: 'http://localhost:5173',
}))};

//middleware to parse JSON
app.use(express.json());


app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../Frontend/dist")));
}

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});