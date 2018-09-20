const express = require('express');
const bodyParser = require('body-parser');
const controller=require("./todo.controller")


const app = express();
app.use(express.static('public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));


app.get('/api/todo',controller.out);
app.get('/api/todo/:id',controller.search);
app.post('/api/todo',controller.in);
app.put('/api/todo/',controller.up);
app.delete('/api/todo/',controller.del);
app.delete('/api/todo/al',controller.delall);


app.listen(6002, () => {
  console.log("Your server running in port 6002");
});