const express =  require('express')
const routes = require('./routes.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
require('./database')

app.use(cors());
app.use(bodyParser.json())
app.use(routes);
//app.use(express.json());


app.listen(8000, ()=>{
    console.log('Servidor on');
})