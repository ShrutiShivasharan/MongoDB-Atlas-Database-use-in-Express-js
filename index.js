import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js' 
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
connectDB();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8001;

//route
app.use('/api/users', userRoutes);

//start server
app.listen(PORT, ()=> {
    console.log("server is running on : localhost:"+`${PORT}`);
})









