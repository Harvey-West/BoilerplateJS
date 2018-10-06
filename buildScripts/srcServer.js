//If we change this to
//import express from 'express'. This is ES6 code
//so can either use Babel, or typescript and point the transpiler
//to ES5.
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.config.dev';

const port = 3000;
const app = express();

const compiler = webpack(config);

app.set('port', (process.env.port || port));

//Disbales header leaking information about the server to the requestor.
app.disable('x-powered-by');

//Way to tell express to use webpack compiler.
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.js'));
});

app.listen(process.env.PORT || app.get('port'), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Node app is running at" +
        app.get('host') + " : " + app.get('port'));
      }
    })
