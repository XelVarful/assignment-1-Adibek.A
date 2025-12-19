const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;
const dataFilePath = path.join(__dirname, 'data.json');


app.use(express.json());


const checkFileExistence = () => {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify({ books: [] }, null, 2));
  }
};


const readData = () => {
  checkFileExistence();
  const rawData = fs.readFileSync(dataFilePath);
  return JSON.parse(rawData);
};


const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Роуты


app.get('/', (req, res) => {
  res.send('Server is running');
});


app.get('/hello', (req, res) => {
  res.json({ message: 'Hello server' });
});


app.get('/time', (req, res) => {
  const currentTime = new Date().toISOString();
  res.json({ time: currentTime });
});


app.get('/status', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running smoothly' });
});


app.get('/books', (req, res) => {
  const data = readData();
  res.json(data.books);
});


app.post('/books', (req, res) => {
  const { name, author, published, genre } = req.body;
  if (!name || !author || !published) {
    return res.status(400).json({ error: 'Name, author, and published year are required' });
  }

  const newBook = {
    id: uuidv4(),
    name,
    author,
    published,
    genre: genre || null,
  };

  const data = readData();
  data.books.push(newBook);
  writeData(data);

  res.status(201).json(newBook);
});


app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { name, author, published, genre } = req.body;

  if (!name || !author || !published) {
    return res.status(400).json({ error: 'Name, author, and published year are required' });
  }

  const data = readData();
  const bookIndex = data.books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  data.books[bookIndex] = { ...data.books[bookIndex], name, author, published, genre: genre || null };
  writeData(data);

  res.json(data.books[bookIndex]);
});


app.delete('/books/:id', (req, res) => {
  const { id } = req.params;

  const data = readData();
  const bookIndex = data.books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  data.books.splice(bookIndex, 1);
  writeData(data);

  res.json({ success: true });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
