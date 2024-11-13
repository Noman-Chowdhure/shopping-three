
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 4000
const app = express();
const service = require('./services.json')
app.use(express.json());
app.use(cors());
require('dotenv').config()
console.log(process.env.DB_PASS)
app.get('/',(req,res)=> {
    res.send('hello dear ..')
});

app.get('/service',(req,res)=>{
    res.send(service)
})

app.get('/ser/:id', (req,res) => {
    const id = req.params.id
    const produ = service.find(abc => abc._id == id);
    res.send(produ)
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://jyaffa1233:${process.env.DB_PASS}@cluster0.dxzip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("insertDB").collection("foods")
   app.post('/services',async(req,res) =>{
       const data = req.body;
       console.log('port is hitthing',data)
   })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, (req,res)=>{
    console.log(`port is hitting on port ${port}`)
})