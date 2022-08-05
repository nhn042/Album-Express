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
        const ownerId = (await userRepo.findUserByEmail(info.email)).id;

    } catch(err) {
        throw err;
    }
};

module.exports = {
    addUserAlbum, createNewUserAlbum
}