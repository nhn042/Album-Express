const userRep = require('../users/user.repository');
const albumRep = require('./album.repository');
const userAlbumService = require('../userAlbum/userAlbum.service');
const userAlbumRepo = require('../userAlbum/userAlbum.repository');

const createAlbum = async (albumInfo) => {
    const userId = ((await userRep.findUserByEmail(albumInfo.email)).id);
    console.log(albumInfo.albumName);
    try {

        if (await userAlbumRepo.checkAlbumExist(userId, albumInfo.albumName)) {
            throw new Error('400', 'this album is exist in your user');
        }
 
        const album = await albumRep.createAlbum(albumInfo);
        if (await userAlbumService.createNewUserAlbum(userId, album.id, 2)) {
            return true;
        } else {
            throw new Error('500', 'create user album fail');
        }
    } catch (err) {}
};

const updateAlbum = async (albumInfo) => {
    const userId = ((await userRep.findUserByEmail(albumInfo.email)).id);
    try {

        if (await userAlbumRepo.checkAlbumExist(userId, albumInfo.albumName)) {
            throw new Error('400', 'this album is exist in your user');
        }
        console.log(userId, albumInfo.albumName )
        if (await userAlbumRepo.isOwnerAlbum(userId, albumInfo.albumName)) {
            throw new Error('400', 'this album is exist in your user');
        }
        console.log("1111")
        return albumRep.updateAlbum(albumInfo);
    } catch (err) {}
};

const deleteAlbum = async (albumInfo) => {
    const userId = (await userRep.findUserByEmail(albumInfo.email)).id;
    try {
        if (!(await userAlbumRepo.isOwnerAlbum(userId, albumInfo.albumName))) {
            throw new Error('403', 'you are not owner . You can not delete album');
        }
        return (await albumRep.deleteAlbum(albumInfo.albumId)) && (await userAlbumRep.deleteUserAlbum(userId, albumInfo.albumId));
    } catch (err) {
        throw(err);
    }
};

module.exports = {
    createAlbum, updateAlbum, deleteAlbum,
}