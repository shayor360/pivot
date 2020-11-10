const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/post');
const User = require('./models/user');

require('dotenv').config();


//requiring routers
const usersRouter = require('./routes/users')
const postRouter = require('./routes/post')
const messageRouter = require('./routes/messages')
const adminRouter = require('./routes/admin')

const app  = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb://mern:soluwaseun946@ds149711.mlab.com:49711/mern",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);
const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log("MongoDB database connection established successfully");
})




app.use('/users', usersRouter);
app.use('/post', postRouter);
app.use('/messages', messageRouter);
app.use('admin',adminRouter);

app.listen(port, ()=>{
	console.log(`Server is running on port: ${port}`);
});