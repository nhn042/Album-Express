require('dotenv').config({path:'./src/configs/.env'})
const connectDB = require('./src/configs/database.config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const useRoute = require('./src/modules/users/user.route');
const authRoute = require('./src/modules/auth/auth.route');
const albumRoute = require('./src/modules/albums/album.route');
const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authRoute);
app.use(useRoute);
app.use(albumRoute);

mongoose.connection.once('open', () => {
    console.log('Connect to MongoDB');
    app.listen(process.env.PORT, () => {
         console.log(`connect to ${process.env.PORT}`);
    });
});
