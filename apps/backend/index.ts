import express from 'express';
import { prisma } from 'db/client'



const app = express();

app.use(express.json());



app.listen(3000);