const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
	firstname:{
		type: String,
		required: true
	},
	lastname:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// //Schema that inherits from user
// const pivotalUserSchema = Event.discriminator('Pivotal',
//   new mongoose.Schema({
//   	post:{
//   		type: String
//   	}
//   }, options));




// const options = {discriminatorKey: 'kind'};

// const userSchema = new mongoose.Schema({/* user schema */}, options);
// const User = mongoose.model('User', userSchema);

// // Schema that inherits from User

// const studentSchema = Event.discriminator('Student',
//   new mongoose.Schema({/* Schema specific to student */}, options));

// const teacher = new Teacher({/* you can add everything here! */});
// const student = new Student({/* you can add everything here! */});