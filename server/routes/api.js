const router = require('express').Router();
const fundController = require('./../controllers/funds.controller');
// const Funds = require('../models/Funds');

// router.get('/all', function(req, res) {
//     Funds.find({}, function(err, funds) {
//         res.json(funds)
//     })
// });

router.get('/balanced-funds', fundController.getBalancedFunds);

router.get('/elss-funds', fundController.getElssFunds);

router.get('/equity-funds', fundController.getEquityFunds);

router.get('/debt-funds', fundController.getDebtFunds);

router.get('/small-midcap-funds', fundController.getSmallMidcapFunds);



module.exports = router;