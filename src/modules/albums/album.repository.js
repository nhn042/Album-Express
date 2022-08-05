const Album = require('./album.model');

const findAlbumId = async (albumId) => {
    const album = await Album.findOne({_id: albumId});
    return album;
};

const findAlbumName = async (albumName) => {
    const album = await Album.findOne({albumName: albumName});
    return album;
};

const createAlbum = async(albumInFor) => {
    const album = new Album({
        albumName: albumInFor.albumName,
        description: albumInFor.description,
    });
    await album.save();
    return album;
};

const updateAlbum = async (albumInfo) => {
    return await Album.updateOne(
        { _id: albumInfo.albumId },
        {
            $set: {
                albumName: albumInfo.albumName,
                description: albumInfo.description,
            },
        }
    );
};
module.exports = {
    findAlbumId, findAlbumName, createAlbum, updateAlbum
}