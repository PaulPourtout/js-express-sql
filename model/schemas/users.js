const Sequelize = require('sequelize');
// const data = require('./data');
let sequelize = null;


if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
	sequelize = new Sequelize('firstdb', 'simplonco', 'simplonco', {
	  host: 'localhost',
	  dialect: 'postgres',
	  pool: {
		max: 5,
		min: 0,
		idle: 10000
	  }
	});
}
const User = sequelize.define('users', {
	firstName: Sequelize.STRING,
	age: Sequelize.REAL,
	description: Sequelize.TEXT
});

// data.map(user => {
// 	sequelize.sync().then(() => {
// 			return User.create({
// 				firstName: user.firstName,
// 				age: user.age,
// 				description: user.description
// 			});
// 	})
// 	.then(user => {
// 		console.log(user.get({
// 			plain: true
// 		}));
// 	});
// });

module.exports = User;
