const   express = require('express'),
        app     = express();

const productsRoute = require('./routes/products');

app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/products', productsRoute);

app.get('/', (req,res) => {
    res.render('index')
});

app.get('/about', (req,res) => {
    res.render('about')
});

app.get('/services', (req,res) => {
    res.render('services')
});

app.get('/contact', (req,res) => {
    res.render('contact')
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
})