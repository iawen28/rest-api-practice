var express = require('express');
var app = express();
var mc = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



var db = mongoose.connect('mongodb://marcie:marcie@ds143737.mlab.com:43737/apipractice', null, function(err) {
	if (err) {
		res.status(500);
		console.log(err);
		res.send("Error");
		return;
	} else {
      app.listen(3000, function () {
      console.log('Example app listening on port 3000!')
    });
	}
});

var teacherSchema = new Schema({
  name: String, 
  email: String
});

var Teachers = db.model('Teachers', teacherSchema);

var studentSchema = new Schema({
  name: String, 
  email: String
});

var Students = db.model('Students', studentSchema);

var classSchema = new Schema({
  name: String, 
  code: String
});

var Classes = db.model('Classes', classSchema);

var teacher1 = new Teachers({
  name: "Billy",
  email: "billy@goat.com"
});

app.get('/', function(req, res) {
	res.render('index');
});


app.get('/api/teachers', function(req, res) {
  Teachers.find().exec(function(err, data) {
  	if (err) {
  		res.status(500);
  		console.log(err);
  		res.end();
  	} else {
  	  data.reverse();
  	  res.status(200);
  	  res.json(data);
    }
  })
});


app.get('/api/teachers/:id', function(req, res) {
  var id = req.param('id');
  Teachers.findOne({"_id": id}).exec(function(err, data) {
  	if (err) {
  		res.status(500);
  		console.log(err);
  		res.end();
  	} else {
  	  res.status(200);
  	  res.json(data);
    }
  })
});

app.post('/api/teachers', function(req, res) {
  var teachers = new Teachers({
  	name: req.body.name,
  	email: req.body.email
  });
  teachers.save(function(err, data) {
  	if (err) {
  	  res.status(400);
  	  console.log(err);
  	  res.end();
  	  return;
  	} 
  	res.status(201);
  	res.send(req.body);
    res.end('Success');
  });
});


app.get('/api/students', function (req, res) {
  Students.find().exec(function(err, data) {
  	if (err) {
  		res.status(500);
  		console.log(err);
  		res.end();
  	} else {
  	  data.reverse();
  	  res.status(200);
  	  res.json(data);
    }
  })
});


app.get('/api/students/:id', function (req, res) {
  var id = req.param('id');
  Students.findOne({"_id": id}).exec(function(err, data) {
  	if (err) {
  		res.status(500);
  		console.log(err);
  		res.end();
  	} else {
  	  res.status(200);
  	  res.json(data);
    }
  })
});


app.post('/api/students', function (req, res) {
  var students = new Students({
  	name: req.body.name,
    email: req.body.email
  });
  students.save(function(err, data) {
  	if (err) {
  	  res.status(400);
  	  console.log(err);
  	  res.end();
  	  return;
  	} 
  	res.status(201);
  	res.send(data);
    res.end('Success');
  });
});


app.get('/api/classes', function (req, res) {
  Classes.find().exec(function(err, data) {
  	if (err) {
  		res.status(500);
  		console.log(err);
  		res.end();
  	} else {
  	  data.reverse();
  	  res.status(200);
  	  res.json(data);
    }
  })
});


app.get('/api/classes/:id', function (req, res) {
  var id = req.param('id');
  Classes.findOne({"_id": id}).exec(function(err, data) {
  	if (err) {
  		res.status(500);
  		console.log(err);
  		res.end();
  	} else {
  	  res.status(200);
  	  res.json(data);
    }
  })
});


app.post('/api/classes', function (req, res) {
  var classes = new Classes({
  	name: req.body.name,
    code: req.body.code
  });
  classes.save(function(err, data) {
  	if (err) {
  	  res.status(400);
  	  console.log(err);
  	  res.end();
  	  return;
  	} 
  	res.status(201);
  	res.send(data);
    res.end('Success');
  });
});


