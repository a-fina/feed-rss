var flatiron = require('flatiron'),
    path = require('path'),
    app = flatiron.app;

var port = process.env.PORT || 5000;

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.http);

app.router.get('/', function () {
  this.res.json({ 'hello': 'world from flatiron' })
});

app.start(port);
