import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/",(req,res)=>{
    res.json(
        {
            status:200,
            message:"BackendDeploy_TestService is running successfully"
        }
    )
})


export default app;