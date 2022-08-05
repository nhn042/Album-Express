const Album = require('./album.model');

const findAlbumId = async (albumId) => {
    const album = await Album.findOne({_id: albumId});
    return album;
};

const findAlbumName = async (albumName) => {
    const album = await Album.findOne({albumName: albumName});
    return album;
};

const createAlbum = async(albumInfor) => {
    const album = new Album({
        albumName: albumInfor.albumName,
        description: albumInfor.description,
    });
    return album;
};
module.exports = {
    findAlbumId, findAlbumName, createAlbum
}