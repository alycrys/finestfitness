const express = require('express');
const mongoose = require('mongoose');
const {dbConnect, dbName} = require('./config');

mongoose.connect(`${dbConnect}${dbName}`, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  name: String,
  title: String,
  description: String,
  bg_color: String
});

// Compile model from schema
const SomeModel = mongoose.model('SomeModel', SomeModelSchema );
var awesome_instance = new SomeModel({ 
  name: 'About',
  title: 'About',
  description: 'This is the About section',
  bg_color: '#ff0022'
 });
// awesome_instance.save(function (err) {
//   if (err) return console.log(err);
//   // saved!
// });
