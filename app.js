const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');
const mongoose = require('mongoose');
const path = require('path');
const bootStrap = require('./server/modules/bootstrap')
const port  = 8000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './server/views'));
app.use(express.static(path.join(__dirname, 'public')));

// connect to mongoDB
var dbPath = process.env.NODE_ENV === 'production' ? 
  'mongodb://ashwani:cleartax123@ds211625.mlab.com:11625/mutual-fund'
  : 'mongodb://localhost/mutualFunds';

mongoose.connect(dbPath, { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  else {
    console.log('connected to mongodb');
    bootStrap.init();
  }
});


// Webpack config
if (process.env.NODE_ENV === 'development') {
    console.log('in webpack hot middleware');
    
    const compiler = webpack(webpackConfig);
    
    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }));
  }
  



app.use('/api', require('./server/routes/api'))


app.use(require('./server/routes/index'))
app.listen(port, () => {
    console.log(`app is running on localhost:${port}`)
})