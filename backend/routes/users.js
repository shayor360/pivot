const router = require('express').Router();
let User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys');
const requireLogin = require('../middleware/requireLogin');


router.post('/add',(req, res) =>{
	const {firstname,username,lastname,email,password} = req.body;
	if(!firstname, !username, !lastname, !email, !password){
		return res.status(422).json({err: "input field is empty please add"})
		console.log(
			"input field is empty please add"
		)
	}
	User.findOne({email:email})
	.then(savedUser=>{
		if(savedUser){
			return res.status(422).json({err: "incorrect email or password"})
		}
		bcrypt.hash(password, 10)
		.then(hashedpassword=>{	
			const newUser = new User({
				firstname,
				username,
				lastname,
				email,
				password:hashedpassword
			});
		
			//saving new user to db
			newUser.save()
			// .then(() => res.json('User added!'))
			.then(() => res.json(newUser))
			.catch(err => res.status(400).json('Error: ' + err));
		})
	})
});

router.post('/signin',(req,res) =>{
	const {email, password} = req.body;
	if(!email || !password){
		return res.status(422).json({err: "input field is empty please add"})
	}

	User.findOne({email:email})
	.then(savedUser=>{
		if(!savedUser){
			return res.status(422).json({err: "invalid email or password"})
		}
		bcrypt.compare(password, savedUser.password)
		.then(doMatch=>{
			if(doMatch){
				// res.json({message:"successfully signed in"})
				const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
				const {_id,username,email} = savedUser;
				res.json({token,user:{_id,username,email}})
			}
			else{
				return res.status(422).json({err: "invalid email or password"})
			}
		})
		.catch(err=>{
			console.log(err)
		})
	})
});

module.exports = router;