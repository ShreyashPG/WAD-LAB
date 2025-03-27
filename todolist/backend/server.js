const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const TODOS_FILE = path.join(__dirname, 'todos.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Helper function to read todos
function readTodos() {
  try {
    const data = fs.readFileSync(TODOS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to write todos
function writeTodos(todos) {
  fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
}

// API Endpoints
app.get('/api/todos', (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const todos = readTodos();
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
  const todos = readTodos();
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  
  todo.text = req.body.text || todo.text;
  todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
  
  writeTodos(todos);
  res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
  let todos = readTodos();
  const initialLength = todos.length;
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  
  if (todos.length === initialLength) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  writeTodos(todos);
  res.status(204).end();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  // Initialize todos file if it doesn't exist
  if (!fs.existsSync(TODOS_FILE)) {
    writeTodos([]);
  }
});