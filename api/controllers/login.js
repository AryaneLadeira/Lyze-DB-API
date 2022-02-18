module.exports = () => {
    const controller = {};
    const db = require("../database/db");

    controller.tryLogin = async (req, res) =>{
        const {user, password} = req.params
        const userData = {
            user: user,
            password: password,
        }

        const catchUser = await db.searchUser(userData);
        return res.status(200).json(catchUser);
    }
  
    return controller;
  }