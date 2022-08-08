const userAlbumRep = require('./userAlbum.repository');
const albumRepo = require('../albums/album.repository');
const userRepo = require('../users/user.repository');

const createNewUserAlbum = async (userId, albumId, role) => {
    try {
        return await userAlbumRep.CreateUserAlbum(userId, albumId, role);
    } catch (err) {
        throw err;
    }
}; 

const addUserAlbum = async(inFor) => {
    try{
        const ownerId = (await userRepo.findUserByEmail(inFor.email)).id;
        if (userAlbumRep.hasPermission(ownerId, inFor.albumName)) {
            const guestId = (await userRepo.findUserByAccount(inFor.account)).id;
            if (await userAlbumRep.checkAlbumExist(guestId, inFor.albumName)) {
                throw err;
            }
            const albumId = (await albumRepo.findAlbumByName(inFor.albumName)).id;
            await userAlbumRep.createUserAlbum(guestId, albumId, 0);
        } else throw err;
    } catch (error) {
        throw err;
    }
};

const deleteUserAlbum = async (inFor) => {
    try {
        const ownerId = (await userRepo.findUserByEmail(inFor.email)).id;
        const albumName = (await albumRepo.findAlbumId(inFor.albumId)).albumName;
        if (await userAlbumRep.isOwnerAlbum(ownerId, albumName)) {
            const memberId = (await userRepo.findUserByID(inFor.account)).id;
            if (!(await userAlbumRep.checkAlbumExist(memberId, albumName))) {
                throw err;
            }
            await userAlbumRep.deleteAlbum(memberId, inFor.albumId);
        } else throw err;
    } catch (error) {
        throw err;
    }
};

module.exports = {
    addUserAlbum, createNewUserAlbum, deleteUserAlbum
}