const albumService = require('./album.service');

const createAlbum = async (req, res) => {
    const albumInfo = req.body;
    console.log(albumInfo);
    try{
        if(await albumService.createAlbum(albumInfo)){
            res.status(200).json('create sucess')
        } else {
            res.status(400).json('create fail')
        }
    }catch(err) {
        throw(err);
    }
};

const updateAlbum = async (req, res) => {
    const albumInfo = req.body;
    albumInfo.albumId = req.params.id;
    try{
        if(await albumService.updateAlbum(albumInfo)){
            res.status(200).json('update sucess')
        } else {
            res.status(400).json('update fail')
        }
    }catch(err) {
        throw(err);
    }
};

const deleteAlbum = async (req, res) => {
    const albumInfo = req.body;
    albumInfo.albumId = req.params.id;
    try{
        if(await albumService.deleteAlbum(albumInfo)){
            res.status(200).json('update sucess')
        } else {
            res.status(400).json('update fail')
        }
    }catch(err) {
        throw(err);
    }
};

module.exports = {
    createAlbum, updateAlbum,
}