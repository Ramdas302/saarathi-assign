const express = require('express');
const bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());

app.post('/api/add', function(req, res) {
    var firstNumber = parseInt(req.body.number1);
    var secondNumber = parseInt(req.body.number2);
     var sum = Number(firstNumber + secondNumber);
     res.send('sum : ' + Number(sum));
});


app.listen(3000, () => console.log('Server started at port : 3000'));