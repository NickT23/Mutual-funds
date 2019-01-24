const Fund = require('./../models/Funds');

module.exports = {
    getBalancedFunds: (req, res) => {
        Fund.find({type: 'Balanced Funds'}, (err, data) => {
            if(err) throw err;
            res.json({data})
        })
    },
    getElssFunds: (req, res) => {
        Fund.find({type: 'ELSS Funds'}, (err, data) => {
            if(err) throw err;
            res.json({data})
        })
    },
    getEquityFunds: (req, res) => {
        Fund.find({type: 'Equity Funds'}, (err, data) => {
            if(err) throw err;
            res.json({data})
        })
    },
    getDebtFunds: (req, res) => {
        Fund.find({type: 'Debt Funds'}, (err, data) => {
            if(err) throw err;
            res.json({data})
        })
    },
    getSmallMidcapFunds: (req, res) => {
        Fund.find({type: 'Small & Midcap Funds'}, (err, data) => {
            if(err) throw err;
            res.json({data})
        })
    }
}