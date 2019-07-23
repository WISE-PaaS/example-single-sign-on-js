const express = require('express');
const path = require('path');

// init app
const app = express();

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//new home page
app.get('/', function(req,res){
    res.render('home_index');
})

const port = process.env.PORT || 3030;
app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
});