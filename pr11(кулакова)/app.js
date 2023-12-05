// привет мир
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
// о нас
app.get('/about', (req, res) => {
    res.send('О нас');
});

// шаблонизатор
app.set('view engine', 'ejs');

// изменил маршрут
app.get('/format', (req, res) => {
  res.render('index');
});
// маршрут к макету
app.get('/maket', (req, res) => {
  res.render('maket');
});

app.use(express.static('public'));

