const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})

.then(() => console.log("Database connected"))
.catch(err => console.log(err))