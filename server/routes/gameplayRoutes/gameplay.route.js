const { addGameplay, getGameplay, deleteGameplay } = require('../../controllers/gameplayControllers');
//const { authenticationToken } = require('../../utils/index');

module.exports = (app) => {
    app.post('/gameplay/create', addGameplay);
    app.get('/gameplay', getGameplay);
    app.delete('/gameplay/delete/:id', authenticationToken, deleteGameplay);
};
