const userAlbumService = require('./userAlbum.service');

const addUserAlbum = async (req, res) => {
    try {
        await userAlbumService.addUserAlbum(req.body);
        res.status(200).send('add success');
    } catch (err) {
        res.status(400).json('fail');
    }
};

const deleteUserAlbum = async (req, res) => {
    try {
       // req.body.albumId = req.params.id;
        await userAlbumService.deleteUserAlbum(req.body);
        res.status(200).send('delete success');
    } catch (err) {
        res.status(400).json('fail');
    }
};

module.exports = {
    addUserAlbum, deleteUserAlbum
}