import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();

// dotenv
dotenv.config();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('server hello at http://localhost:8080'));
