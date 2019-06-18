//// Imports
const exp = require('express'); // express foro routing.
const njk =  require('nunjucks'); // template engine
const sess = require('express-session'); // express-session for session informations
const flash = require('express-flash'); // express-flash for flash messages
const path = require('path'); // get path object

//// Initializations
const app = exp(); // initializing the app

//// settings

app.set('port', process.env.PORT || 3000); // setting the port for current local machine

app.set('views', path.join(__dirname, 'views')); // setting views path for view engine

// setting nunjucks to configure html files, options are declared
njk.configure('views', {
    autoescape: true,
    cache: false,
    express: app
});

// setting view engine extension as .html
app.set('view engine', 'html');

//// middlewares

app.use(exp.urlencoded({extended:false}));

// session object configurations
app.use(sess({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// initializing flash object
app.use(flash());

//// global variables

// setting request, response and next objects to disable client to access albums without login
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

// static fields that includes css and js files

app.use(exp.static(path.join(__dirname, 'public')));

// server listens to

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

