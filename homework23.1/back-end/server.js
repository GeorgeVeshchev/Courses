import "dotenv/config";
import { logger } from './libs/logger.js';
import { app } from './app/index.js';
import cors from 'cors';
import express from "express";
import { todoRouter } from './app/controller.js' 


app.use(cors());


app.use(express.json());


app.use('/todo-list', todoRouter); 


app.options('/todo-list', cors());

const HOST_NAME = process.env.HOST_NAME ?? "localhost"
const PORT = process.env.PORT ?? 3111

app.listen(PORT, HOST_NAME , () =>{
    logger.error(`Server is serving on http://${HOST_NAME}:${PORT}`);
});



