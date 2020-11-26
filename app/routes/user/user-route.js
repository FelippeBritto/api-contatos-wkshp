const userController = require('../../controllers/user-controller');

module.exports = (app) => {
    app.route('/ping').get(userController.ping);
    app.route('/novo-usuario').post(userController.novoUsuario);
    app.route('/login-usuario').post(userController.loginUsuario);
}
