// Importy
const exp = require('express');
const njk =  require('nunjucks');
const pass = require('passport');
const sess = require('express-session');
const flash = require('connect-flash');
const path = require('path');

// Initializations
const app = exp();
require('./database');
require('./config/passport');

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
app.use(pass.initialize());
app.use(pass.session());
app.use(flash());

// global variables

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
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

