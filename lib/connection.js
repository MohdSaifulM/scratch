const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
}, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('mongodb connected!');
    }
}
);