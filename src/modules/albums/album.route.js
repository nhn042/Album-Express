const express = require('express');
const router = express.Router();
const albumController = require('./album.controller');

router.post('/album', albumController.createAlbum);

module.exports = router;