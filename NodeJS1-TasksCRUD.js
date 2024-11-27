const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const tasks = require('./tasks.json');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.get('/tasks', (req, res) => {
  res.json(tasks);
});


app.get('/tasks', (req, res) => {
  res.json(tasks);
});


app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == parseInt(req.params.id));
  if(!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});


const insertTask = (tasks) => {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}


app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);
  insertTask(tasks);
  res.status(200).json(newTask);
});


app.put('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id == parseInt(req.params.id));

  if(taskIndex == -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const updatedTask = { ...tasks[taskIndex], ...req.body };
  tasks[taskIndex] = updatedTask;
  insertTask(tasks);
  res.json(updatedTask);
});


app.delete('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id == parseInt(req.params.id));
  if(taskIndex == -1) {
    return res.status(404).send('Task not found');
  }
  tasks.splice(taskIndex, 1); 
  insertTask(tasks);
  return res.status(404).json({ message: 'Task not found' });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
