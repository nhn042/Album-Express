// require('dotenv').config({path:'./src/configs/.env'})
// const mongoose = require('mongoose');

// mongoose.connect((process.env.MONGODB_URL)).catch(err => {
//     console.log(err);
// })
// module.exports = { mongoose }
const mongoose = require('mongoose');
require('dotenv').config({ path: './src/configs/.env' });
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    } catch (err) {
        console.error(err);
    }
};
module.exports = connectDB;
