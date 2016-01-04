var express = require('express');
var app = express();

const PORT = process.env.PORT || 9090

app.listen(PORT)
console.log('Listening on port: ' + PORT)

app.use(express.static('public'));
