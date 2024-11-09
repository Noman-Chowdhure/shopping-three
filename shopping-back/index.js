
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 4000
const app = express();
const service = require('./services.json')
app.use(express.json());
app.use(cors());

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

app.listen(port, (req,res)=>{
    console.log(`port is hitting on port ${port}`)
})