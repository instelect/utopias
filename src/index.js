const { Console } = require('console');
const { renderFile } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;                  
// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
// middleware


// routes

app.use(require('./routes/'));

// Static files

app.use(express.static(path.join(__dirname, 'public')))

// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});