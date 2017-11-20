const router = require('express').Router();
const Book = require('../models/book');

router.get('/', (req, res) => {
	Book.find()
		.then((data)=>res.send(data))
		.catch((err)=>res.send(err))});

router.get('/:id', (req, res) => {
	Book.findOne({_id:req.params.id})
		.then((data)=>res.send(data))
		.catch((err)=>res.send(err))
});

router.post('/', (req, res) => {
	new Book(req.body).save()
		.then(()=>res.sendStatus(200))
		.catch((err)=>res.send(err))
});

router.delete('/:id', (req, res) => {
	Book.remove({_id:req.params.id})
		.then(()=>res.sendStatus(200))
		.catch((err)=>res.send(err))
});

router.put('/:id', (req, res) => {
	Book.update({_id:req.params.id}, req.body)
		.then(()=>res.sendStatus(200))
		.catch((err)=>res.send(err))
});

module.exports = router;