module.exports = app => {
    const controller = require('../controllers/customer')();
  
    app.route('/api/customer')
      .get(controller.listCustomerWallets);
  }