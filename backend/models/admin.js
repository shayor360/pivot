const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const {ObjectId} = mongoose.Schema.Types

const adminSchema = new Schema({
	posts:{
		type: ObjectId,
		ref: 'Post'
	}

})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
