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

module.exports = {
    createAlbum
}