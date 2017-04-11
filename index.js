// Configure express
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const promise = require('es6-promise');
promise.polyfill();
const errorHandler = require('error-handler');
const port = process.env.PORT || 5000;
const ejs = require('ejs');

// Import data users
const User = require('./model/schemas/users');
// const users = require('./model/data.js');
const formateurs = require('./model/formateurs.js');

// Import data projects
const projects = require('./model/projects.js');


// app.use(express.bodyParser());
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

// Building middleware
const logReqType = function(req, res, next) {
	const dateNow = function now() {
		const sec = new Date().getSeconds();
		const min = new Date().getMinutes();
		const hour = new Date().getHours();
		const day = new Date().getDate();
		const month = new Date().getMonth();
		const year = new Date().getFullYear();
		return `${hour}:${min}:${sec} ${day}/${month}/${year}`;
	};
	console.log(chalk.yellow('request method : ' + req.method + ' url: "' + req.url + '" at ' + dateNow()));
	next();
};


// Calling Middleware
app.use(logReqType);
// app.use(logError);
app.use(errorHandler);
app.get('/', function(req, res) {
	// console.log(firebase.auth().user);
  res.render('./pages/index.ejs');
})

.get('/formulaire', function(req, res) {
	res.render('./pages/formulaire.ejs');
})

.post('/formulaire', function(req, res) {
	res.redirect('/');
})

.get('/users', function(req ,res) {
	User.findAll({})
	.then(user => {
		return user.map(use => {
			console.log(use.firstName);
			return use;
		});
	})
	.then(users => {
		res.render('./pages/users.ejs', {users: users});
	})
	.catch(err => {
		console.log(err);
	});
})

.get('/user/:id', function(req, res) {
	// Check if user exists
	User.findAll({
		where: {
			id: req.params.id
		}
	})
	.then(res => {
		return res[0];
	})
	.then(user => {
		// If user existe
		if (user) {
			// Call the user page
			res.render('./pages/user.ejs', {
				user: user
			});
		}
		// If user doesn't exists
		else {
			res.redirect('/error');
		}
	})
	.catch(err => {
		console.log(err);
	});
})


.get('/user/:id/projects', function(req, res) {
	const userProjects = projects.filter(function(project) {
		return project.userId === users[req.params.id].id;
	});
	res.render('./pages/user-projects.ejs', {
		user: users[req.params.id],
		projects: userProjects
	});
})

.get('/projects', function(req, res) {
	res.render('./pages/projects.ejs', { projects: projects });
})

.get('/project/:id', function(req ,res) {
	const project = projects[req.params.id];
	const user = users[project.userId];

	res.render('./pages/project.ejs', {
		project : project,
		user: user
	});
})

.get('/api/users', function(req, res) {
	User.findAll({})
	.then(user => {
		return user.map(use => {
			console.log(use.firstName);
			return use;
		});
	})
	.then(users => {
		res.json(users);
	})
	.catch(err => {
		console.log(err);
	})
})

.get('*', function(req, res) {
  res.status(404).render('./pages/error.ejs');
})


.listen(port, function(req, res) {
  console.log('The server is OK. Now you can connect to localhost:5000.');
});
