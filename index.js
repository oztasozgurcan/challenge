// Importy
const exp = require('express');
const njk =  require('nunjucks');
const pass = require('passport');
const sess = require('express-session');
const flash = require('express-flash');
const path = require('path');

// Initializations
const app = exp();

// settings

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

njk.configure('views', {
    autoescape: true,
    cache: false,
    express: app
});

app.set('view engine', 'html');

// middlewares

app.use(exp.urlencoded({extended:false}));

app.use(sess({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(flash());

// global variables

app.use((req, res, next) => {
    res.locals.user = req.user || null;

    if(['/', '/login'].indexOf(req.url) !== -1 && req.session.isLoggedIn){
        return res.redirect('/myalbums');
    }

    next();
});

// routes

app.use(require('./routes'));
app.use(require('./routes/login'));
app.use(require('./routes/myalbums'));

// static fields

app.use(exp.static(path.join(__dirname, 'public')));

// server listens to

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

