const fs = require('fs');

var data = fs.readFileSync('datam.json');

var elements = JSON.parse(data);

const express = require|('express');
const app = express();

const cors = require('cors');

app.listen(4000,()=>{
    console.log('server Started')
})

app.use(express.static('public'));
app.use(cors());

app.get('/movies',allData);

function allData(req,res){
    res.send(elements);
}