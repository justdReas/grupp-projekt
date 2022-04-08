const express = require('express');
const bodyParser = require("body-parser");

const routes = require("./routes");


const app = express();

app.use(bodyParser.json());


app.use('/Page3', routes);


app.listen (8080, () => {
    console.log('Hello world! Why are you runing!?');
}); 


