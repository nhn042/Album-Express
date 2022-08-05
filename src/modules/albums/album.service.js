const userRep = require('../users/user.repository');
const albumRep = require('./album.repository');
const userAlbumService = require('../userAlbum/userAlbum.service');
const userAlbumRepo = require('../userAlbum/userAlbum.repository');

const createAlbum = async (albumInfo) => {
    const user = await userRep.findUserByEmail(albumInfo.email);
    console.log(albumInfo);
    try {
        if (await userAlbumRepo.checkAlbumExist(user.id, albumInfo.albumname)) {
            throw new Error('400', 'this album is exist in your user');
        }
        const album = await albumRep.createAlbum(albumInfo);
        console.log(album);
        await album.save();
        if (await userAlbumService.createNewUserAlbum(user.id, album.id, 2)) {
           console.log("1");
            return true;
        } else {
            throw new Error('500', 'create user album fail');
        }
    } catch (err) {}
};

module.exports = {
    createAlbum,
}