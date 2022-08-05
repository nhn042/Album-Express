const userAlbumService = require('./userAlbum.service');

const addUserAlbum = async (req, res) => {
    try {
        await userAlbumService.addUserAlbum(req.body);
        res.status(200).send('add user into album success');
    } catch (err) {
        res.status(400).json('fail');
    }
};