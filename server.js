var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('htdocs')).listen(8000);