const router = require('express').Router();
const IPNController = require('./controllers/ipn.ctrl');

router.get('/', (req, res) => { res.status(200).json('Hello World!') })
router.post('/ipn', IPNController.index);

module.exports = router;