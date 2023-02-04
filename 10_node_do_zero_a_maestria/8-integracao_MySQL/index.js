const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const pool = require('./db/conn');

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.get('/',(req,res) => {
  res.render('home')
});

app.get('/books',(req,res) => {

  const sql = "SELECT * FROM books"
  pool.query(sql, function (err,data){

    if(err){
      console.log(err)
      return
    }
    const books = data
    res.render('books', { books }) 
  })
});

app.get('/books/:id',(req,res) => {

  const id = req.params.id
  const sql = `SELECT * FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, function(err, data){

    if(err){
      console.log(err)
      return
    }
    const book = data[0]
    res.render('book', { book })
  })
});

app.get('/books/edit/:id',(req,res) => {  
  const id = req.params.id
  const sql = `SELECT * FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, function(err, data){
    
    if(err){
      console.log(err)
      return
    }
    const book = data[0]
    res.render('editbook', { book })
  })
});

app.post('/books/updatebook', (req,res) => {
  const id = req.body.id
  const { title, pages, autor } = req.body
  const sql = `UPDATE books SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?`
  const data = ['title', 'pages', 'autor', 'id', title, pages, autor, id]

  pool.query(sql, data, function(err, data){

    if(err){
      console.log(err)
    }
    res.redirect('/books')
  })
});

app.post('/books/insertbook', (req,res) => {

  const{ title, pages, autor } = req.body

  const sql = `INSERT INTO books (??, ??, ??) VALUES (?, ?, ?)`
  const data = ['title', 'pages, autor', title, pages, autor]

  pool.query(sql, data, (err) => {

    if(err){
      console.log(err)
      return
    }
    res.redirect('/')
  })
});

app.post('/books/delete/:id',(req,res) => {

  const id = req.params.id
  const sql = `DELETE FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql,data,(err) => {
    if(err){
      console.log(err)
      return
    }
    res.redirect('/books')
  })
});

app.listen(8000, () => {
  console.log('Servidor rodando na porta http://localhost:8000')
});