const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://admin:ironMan26092013@challengedb-ahitm.mongodb.net/test?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));