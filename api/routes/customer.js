module.exports = app => {
    const controller = require('../controllers/customer')();
    const loginController = require('../controllers/login')();
  
    app.route('/api/customer')
      .get(controller.listCustomerWallets);


    app.route('/api/login/:user/:password')
      .get(loginController.tryLogin);
  }