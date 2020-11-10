const router = require('express').Router();
let Admin = require('../models/admin');

router.get('/userspost',(req,res)=>{
	res.send("ad")
	console.log("Asdcas")
	res.json({"pst":"ds"})
});

module.exports = router;