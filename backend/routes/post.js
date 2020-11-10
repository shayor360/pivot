const router = require('express').Router();
let Post = require('../models/post');
const requireLogin = require('../middleware/requireLogin')


router.get('/allpost',(req, res) =>{
	Post.find()
	.populate("postedBy", "_id	username")
	.then(posts =>{
		res.json({posts})
	})
	.catch(err=>{
		console.log(err)
	})
})

router.post('/createpost',(req,res)=>{
	const {post} = req.body;
	if(!post){
		return res.status(422).json({err: "input field is empty please add"})
	}
	req.user.password = undefined;
	const newPost = new Post({
		post,
		postedBy:req.user
	})

	 newPost.save()
	.then(result=>{
		res.json({newPost:result})
	})
	.catch(err=>{
		console.log(err)
	})
})

router.get('/mypost/:id',(req,res)=>{
	Post.find({postedBy:req.user._id})
	.populate("PostedBy", "_id  username")
	.then(mypost=>{
		res.json({mypost})
	})
	.catch(err=>{
		console.log(err)
	})
})

module.exports = router;