const router = require('express').Router();
const User = require('../models/user');

router.get('/', (req, res) => {
	User.find()
		.then((data)=>res.send(data))
		.catch((err)=>res.send(err))});

router.get('/:id', (req, res) => {
	User.findOne({_id:req.params.id})
		.then((data)=>res.send(data))
		.catch((err)=>res.send(err))
});

router.post('/', (req, res) => {
	new User(req.body).save()
		.then(()=>res.sendStatus(200))
		.catch((err)=>res.send(err))
});

router.delete('/:id', (req, res) => {
	User.remove({_id:req.params.id})
		.then(()=>res.sendStatus(200))
		.catch((err)=>res.send(err))
});

router.put('/:id', (req, res) => {
	User.update({_id:req.params.id}, req.body)
		.then(()=>res.sendStatus(200))
		.catch((err)=>res.send(err))
});

module.exports = router;