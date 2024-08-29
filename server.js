// Setup
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Custy = require('./models/customers.js')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Home Page
app.get('/',(req,res)=>{
    res.render('home.ejs')
})

// Database
app.get('/cust', async (req,res)=>{
    try{
        res.json(await Custy.find({}))
    }catch (err){
        res.status(400).json(err)
    }
});

app.post('/cust', async (req,res)=>{
    try{
        res.json(await Custy.create(req.body))
    }catch (err){
        res.status(400).json(err)
    }
});
app.put('/cust/:id', async (req,res)=>{
    try{
        res.json(await Custy.findByIdAndUpdate(req.params.id, req.body))
    }catch (err){
        res.status(400).json(err)
    }
});

app.delete('/cust/:id', async (req,res)=>{
    try{
        res.json(await Custy.findByIdAndDelete(req.params.id))
    }catch (err){
        res.status(400).json(err)
    }
});
//EJS
app.post('/cust-ejs', async (req,res)=>{
    try{
        await Custy.create(req.body)
        res.redirect('/')
    }catch (err){
        res.status(400).json(err)
    }
});
app.get('/cust-ejs', async (req,res)=>{
    try{
        let x= await Custy.find(({}))
        console.log(x)
        res.render('./partials/custys.ejs', {x})
    }catch (err){
        res.status(400).json(err)
    }
});

// app.listen(port, ()=>{
//     console.log(`hello, welcome to ${port} `)
// })