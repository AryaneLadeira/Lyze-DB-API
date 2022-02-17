module.exports = () => {
  const controller = {};
  const db = require("../database/db");

  controller.listCustomerWallets = async (req, res) =>{
    const clientes = await db.selectCustomers();
      return res.status(200).json(clientes);
  }

  return controller;
}