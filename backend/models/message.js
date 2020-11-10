const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const {ObjectId} = mongoose.Schema.Types;

const messageSchema = new Schema({
	message:{
		type: String
	},
	postedBy:{
		type: ObjectId,
		ref: 'User'
	}
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

