const userAlbums = require('./userAlbum.model')

const CreateUserAlbum = async (userId, albumId, role) => {
    const userAlbum = await userAlbums.create({
        userId: userId,
        albumId: albumId,
        role: role,
    });
    return userAlbum;
};

const checkAlbumExist = async (userId, albumname) => {
    const userAlbum = await userAlbums.find({ userId }).populate({ path: 'albumId', model: album });
    if (!userAlbum) {
        return false;
    } else {
        return !!userAlbum.find((item) => item.albumId.albumname === albumname);
    }
};

const findAlbum = async (userId) => {
    const album = await userAlbums.findOne({
        userId: userId,
    });
    return album;
};

const deleteAlbum = async (userId) => {
    return album = await userAlbums.findOneAndDelete({
        userId: userId,
    });
};

const hasPermission = async (userId, albumname) => {
    const userAlbum = await userAlbums.find({ userId }).populate({ path: 'albumId', model: album });
    return userAlbum.find((item) => item.albumId.albumname === albumname).role >= 1 ? true : false;
};


module.exports = {
    CreateUserAlbum,
    findAlbum,
    deleteAlbum,
    hasPermission,
    checkAlbumExist
}