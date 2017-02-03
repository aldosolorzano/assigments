const Express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const home = require('./routes/home');
const app = Express();

app.set('view engine','ejs');
app.use(Express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',home);

const PORT = 6050;
app.listen(PORT, function(){console.log('Server listening on http://localhost:'+PORT)})
