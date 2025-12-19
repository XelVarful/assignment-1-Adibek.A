const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;
const dataFilePath = path.join(__dirname, 'data.json');

// Middleware для парсинга JSON
app.use(express.json());

// Проверка, существует ли файл данных
const checkFileExistence = () => {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify({ books: [] }, null, 2));
  }
};

// Чтение данных из JSON файла
const readData = () => {
  checkFileExistence();
  const rawData = fs.readFileSync(dataFilePath);
  return JSON.parse(rawData);
};

// Запись данных в JSON файл
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Демонстрационные маршруты

// Главная страница
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Приветствие
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello server!' });
});

// Текущее время
app.get('/time', (req, res) => {
  const currentTime = new Date().toISOString();
  res.json({ time: currentTime });
});

// Статус
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Salamaleikum' });
});

// Получить все книги
app.get('/books', (req, res) => {
  const data = readData();
  res.json(data.books);
});

// Добавить новую книгу
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

// Обновить книгу по ID
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

// Удалить книгу по ID
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

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
