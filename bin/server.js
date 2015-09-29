var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');

var app = new require('express')();
var port = 3000;
var rootDir = path.resolve(__dirname, '..');

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// API MOCK
app.get('/api/list', function(req, res) {
  res.send({
    "list": [
      {
        "id": 1,
        "name": "naotarou"
      },
      {
        "id": 2,
        "name": "erika"
      },
      {
        "id": 3,
        "name": "shunsuke"
      }
    ]
  });
});

app.get("/", function(req, res) {
  res.sendFile(rootDir + '/src/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
