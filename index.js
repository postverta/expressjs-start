const express = require('express')
const app = express()
const pug = require('pug')
const bodyParser = require('body-parser')

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'))

// Store TODOs in memory
var todos = [];

app.get('/', function (req, res) {
  res.render('index', {todos: todos});
});

app.post('/add', function (req, res) {
  var newTodo = req.body.todo;
  console.log("new TODO item:", newTodo);
  todos.push(newTodo);
  res.redirect(302, '/');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
