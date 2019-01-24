const Fund = require('./../models/Funds');

const newFund1 = new Fund({ name: 'ICICI Prudential Equity & Debt', type: 'Balanced Funds', fiveYrReturns: 16.05 });
const newFund2 = new Fund({ name: 'Reliance Equity Hybrid', type: 'Balanced Funds', fiveYrReturns: 15.39 });
const newFund3 = new Fund({ name: 'HDFC Hybrid Equity Fund', type: 'Balanced Funds', fiveYrReturns: 17.02 });
const newFund4 = new Fund({ name: 'L&T Hybrid Equity', type: 'Balanced Funds', fiveYrReturns: 15.63 });
const newFund5 = new Fund({ name: 'SBI Equity Hybrid Fund', type: 'Balanced Funds', fiveYrReturns: 15.59 });
const newFund6 = new Fund({ name: 'DSP Equity & Bond', type: 'Balanced Funds', fiveYrReturns: 14.17 });
const newFund7 = new Fund({ name: 'Canara Robeco Equity Hybrid', type: 'Balanced Funds', fiveYrReturns: 14.69 });
const newFund8 = new Fund({ name: 'Aditya BSL Equity Hybrid 95', type: 'Balanced Funds', fiveYrReturns: 14.62 });
const newFund9 = new Fund({ name: 'HDFC Balanced Advantage Fund', type: 'Balanced Funds', fiveYrReturns: 16.6 });
const newFund10 = new Fund({ name: 'ICICI Prudential Balanced Advantage', type: 'Balanced Funds', fiveYrReturns: 12.44 });

const newFund11 = new Fund({ name: 'Aditya BSL Tax Relief 96', type: 'ELSS Funds', fiveYrReturns: 19.78 });
const newFund12 = new Fund({ name: 'Axis Long Term Equity Fund', type: 'ELSS Funds', fiveYrReturns: 20.54 });
const newFund13 = new Fund({ name: 'DSP Tax Saver', type: 'ELSS Funds', fiveYrReturns: 17.95 });
const newFund14 = new Fund({ name: 'ICICI Pru Long Term Eq Fund ( Tax Sav)', type: 'ELSS Funds', fiveYrReturns: 16.18 });
const newFund15 = new Fund({ name: 'L&T Tax Advantage', type: 'ELSS Funds', fiveYrReturns: 16.1 });
const newFund16 = new Fund({ name: 'Motilal Oswal Long Term Equity', type: 'ELSS Funds', fiveYrReturns: ""});
const newFund17 = new Fund({ name: 'UTI Long Term Equity', type: 'ELSS Funds', fiveYrReturns: 13.77 });
const newFund18 = new Fund({ name: 'HDFC TaxSaver', type: 'ELSS Funds', fiveYrReturns: 14.97 });
const newFund19 = new Fund({ name: 'Reliance Tax Saver', type: 'ELSS Funds', fiveYrReturns: 17.73 });
const newFund20 = new Fund({ name: 'SBI Magnum Tax Gain Scheme', type: 'ELSS Funds', fiveYrReturns: 14.46 });

const newFund21 = new Fund({ name: 'Mirae Asset India Equity Fund', type: 'Equity Funds', fiveYrReturns: 18.74 });
const newFund22 = new Fund({ name: 'Axis Bluechip Fund', type: 'Equity Funds', fiveYrReturns: 15.04 });
const newFund23 = new Fund({ name: 'ICICI Prudential Bluechip', type: 'Equity Funds', fiveYrReturns: 15.01 });
const newFund24 = new Fund({ name: 'SBI Bluechip Fund', type: 'Equity Funds', fiveYrReturns: 16.28 });
const newFund25 = new Fund({ name: 'Aditya BSL Frontline Equity', type: 'Equity Funds', fiveYrReturns: 15.27 });
const newFund26 = new Fund({ name: 'Mirae Asset Emerging Bluechip', type: 'Equity Funds', fiveYrReturns: 28.09  });
const newFund27 = new Fund({ name: 'L&T India Value', type: 'Equity Funds', fiveYrReturns: 21.59 });
const newFund28 = new Fund({ name: 'Kotak Standard Multicap Fund', type: 'Equity Funds', fiveYrReturns: 17.61 });
const newFund29 = new Fund({ name: 'SBI Magnum Multicap', type: 'Equity Funds', fiveYrReturns: 19.1 });
const newFund30 = new Fund({ name: 'Axis Focused 25', type: 'Equity Funds', fiveYrReturns: 17.04 });

const newFund31 = new Fund({ name: 'SBI Magnum Ultra Short Dur', type: 'Debt Funds', fiveYrReturns: 7.91 });
const newFund32 = new Fund({ name: 'Reliance Low Duration', type: 'Debt Funds', fiveYrReturns: 7.98 });
const newFund33 = new Fund({ name: 'UTI Short Term Income', type: 'Debt Funds', fiveYrReturns: 8.14 });
const newFund34 = new Fund({ name: 'Aditya BSL Savings Fund', type: 'Debt Funds', fiveYrReturns: 8.51 });
const newFund35 = new Fund({ name: 'UTI Trsury Adv', type: 'Debt Funds', fiveYrReturns: 8.26 });
const newFund36 = new Fund({ name: 'HDFC Short Term Debt Fund', type: 'Debt Funds', fiveYrReturns: 8.31  });
const newFund37 = new Fund({ name: 'L&T Low Duration', type: 'Debt Funds', fiveYrReturns: 8.69 });
const newFund38 = new Fund({ name: 'Aditya BSL Credit Risk', type: 'Debt Funds', fiveYrReturns: "" });
const newFund39= new Fund({ name: 'Aditya BSL Medium Term', type: 'Debt Funds', fiveYrReturns: 8.93 });
const newFund40 = new Fund({ name: 'DSP Credit Risk Fund', type: 'Debt Funds', fiveYrReturns: 7.85 });

const newFund41 = new Fund({ name: 'HDFC Mid-Cap Opportunities  ', type: 'Small & Midcap Funds', fiveYrReturns: 21.85 });
const newFund42 = new Fund({ name: 'Kotak Emerging Equity Scheme', type: 'Small & Midcap Funds', fiveYrReturns: 24.04 });
const newFund43 = new Fund({ name: 'L&T Midcap', type: 'Small & Midcap Funds', fiveYrReturns: 25.59 });
const newFund44 = new Fund({ name: 'Canara Robeco Emerging Equities', type: 'Small & Midcap Funds', fiveYrReturns: 27.28 });
const newFund45 = new Fund({ name: 'DSP Midcap Fund', type: 'Small & Midcap Funds', fiveYrReturns: 21.68 });
const newFund46 = new Fund({ name: 'HDFC Small Cap Fund', type: 'Small & Midcap Funds', fiveYrReturns: 20.8  });
const newFund47 = new Fund({ name: 'Reliance Small Cap', type: 'Small & Midcap Funds', fiveYrReturns: 28.61 });
const newFund48 = new Fund({ name: 'SBI Small Cap Fund', type: 'Small & Midcap Funds', fiveYrReturns: 30.78 });
const newFund49= new Fund({ name: 'Aditya BSL Small Cap Fund', type: 'Small & Midcap Funds', fiveYrReturns: 20.84 });
const newFund50 = new Fund({ name: 'DSP Small Cap', type: 'Small & Midcap Funds', fiveYrReturns: 26.43 });

function saveAllFunds() {
    newFund1.save();
    newFund2.save();
    newFund3.save();
    newFund4.save();
    newFund5.save();
    newFund6.save();
    newFund7.save();
    newFund8.save();
    newFund9.save();
    newFund10.save();
    newFund11.save();
    newFund12.save();
    newFund13.save();
    newFund14.save();
    newFund15.save();
    newFund16.save();
    newFund17.save();
    newFund18.save();
    newFund19.save();
    newFund20.save();
    newFund21.save();
    newFund22.save();
    newFund23.save();
    newFund24.save();
    newFund25.save();
    newFund26.save();
    newFund27.save();
    newFund28.save();
    newFund29.save();
    newFund30.save();
    newFund31.save();
    newFund32.save();
    newFund33.save();
    newFund34.save();
    newFund35.save();
    newFund36.save();
    newFund37.save();
    newFund38.save();
    newFund39.save();
    newFund40.save();
    newFund41.save();
    newFund42.save();
    newFund43.save();
    newFund44.save();
    newFund45.save();
    newFund46.save();
    newFund47.save();
    newFund48.save();
    newFund49.save();
    newFund50.save();
}

module.exports = {
    init: () => {
      Fund.count((err, number) => {
        if (number === 0) {
          saveAllFunds();
        }
      });
    },
  };