const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const title = 'Assignment';
	res.render('index', {title: title}) // renders views/index.handlebars
});

module.exports = router;