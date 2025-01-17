import express from 'express'
import connectToMongo from "./db.js"
import router from './routers/route.js'
import cors from 'cors'
import 'dotenv/config'


const app = express()
const port = process.env.PORT || 9300

app.use(express.json());
app.use(cors());


app.use('/',router);

app.listen(port, () => {
    connectToMongo();
  console.log(`Server listening on port ${port}`)
}) 