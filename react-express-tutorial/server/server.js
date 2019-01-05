const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 1411;
const config = require('./database/DB');

mongoose.connect(config.DB).then(
    () => {console.log('Server connected')},
    err => {console.log('Can not connect to db' + err)}
);
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log('Server is running on port: {0}', PORT);
});