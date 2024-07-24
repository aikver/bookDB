const express = require("express");
const crypto = require("crypto");
const wrRoute = express.Router();
const connection = require ('../db');
const { create } = require("domain");

wrRoute.post('/users',function(req,res,next){
    //let mypass = crypto.createHash('md5').update(req.body.password).digest('hex');

    connection.execute(`INSERT INTO books
    (title, author, published_year, genre, available, created_at, updated_at)
    VALUES (?,?,?,?,?,?,?);`,[req.body.title,req.body.author,req.body.published_year,req.body.genre, Date.now(),Date.now()])
    .then(() => {
        console.log('ok');
        res.status(201).send('Insert Successful!');
   }).catch((err) => {
    console.log(err);
    res.status(500).send('Insert Failed!');
   });

});

wrRoute.get('/users',function(req,res,next){
    connection.execute("SELECT * FROM books;")
    .then((result) => {
        const rawData = result[0];
        res.json(rarwData);
   }).catch((err) => {
    console.log(err);
    res.status(500).send('Read Failed!');
   });
})

wrRoute.post('/check',function(req,res,next){
    connection.execute("SELECT * FROM books WHERE title =?;",)
    .then((result) => {
        const rawData = result[0];
    })
});
