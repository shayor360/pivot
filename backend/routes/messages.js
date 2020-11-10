const router = require('express').Router();
let Message = require('../models/message');
// const requireLogin = require('../middleware/requireLogin');


router.post('/createmessage',(req,res)=>{
	const {message} = req.body;
	console.log(message)
	if(!message){
		return res.status(422).json({err: "input field is empty please add"})
	}
	console.log(req.user)
	res.send("OK")
	const newMessage= new Message({
		message,
		postedBy:req.user
	})

	 newMessage.save()
	.then(result=>{
		res.json({newMessage:result})
	})
	.catch(err=>{
		console.log(err)
	})

})



module.exports = router;