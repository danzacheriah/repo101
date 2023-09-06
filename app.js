// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory data store (for demonstration)
let items = [];

app.use(bodyParser.json());

// Create
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read (Get all items)
app.get('/items', (req, res) => {
  res.json(items);
});

// Update
app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  items[itemId] = updatedItem;
  res.json(updatedItem);
});

// Delete
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const deletedItem = items[itemId];
  items.splice(itemId, 1);
  res.json(deletedItem);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
