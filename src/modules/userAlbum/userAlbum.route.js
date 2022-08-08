const express = require('express');
const router = express.Router();
const { checkLogin } = require('../../utils/middleware.utils');
const userAlbumsController = require('./userAlbum.controller');

router.post('/user-album', checkLogin, userAlbumsController.addUserAlbum);
router.delete('/user-album/:id', checkLogin, userAlbumsController.deleteUserAlbum);
//router.put('/user-album/:id', checkLogin, userAlbumsController.grantPermission);

module.exports = router;
