const { createOneCommunityUser, getAllCommunityUsers, getOneCommunityUser, updateOneCommunityUser } = require('../../controllers/communityControllers/community.controller');
const {authenticateToken} = require('../../utils/index');

module.exports = (app) => {
    app.get('/community/users', getAllCommunityUsers); // Gets all community user infos
    app.get('/community/user', authenticateToken, getOneCommunityUser); // Gets the current user's info
    app.post('/community/user/create', authenticateToken, createOneCommunityUser); // Creates one community user
    app.put('/community/user/update', authenticateToken, updateOneCommunityUser); // Updates one community user
}