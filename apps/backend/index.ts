import express from 'express';
import { prisma } from 'db/client'



const app = express();

app.use(express.json());

app.post("/signup", async (req, res) =>{
  const {username, password} = req.body;

  await prisma.user.create({
    data:{
      username, 
      password,
      role: "Admin"
    }
  })
  res.json({message: "Signed UP "})
})

app.listen(3000);