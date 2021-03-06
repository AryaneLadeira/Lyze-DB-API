async function connecting(){
    if(global.connect && global.connection.state !== 'disconnected'){
        "Conexão já existente, reaproveitando..."
        return global.connection
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:1234@localhost:3306/siterp")
    // mysql://usuario:senha@servidor:porta/banco
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectCustomers(){
    const conn = await connecting();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    console.log("rows", rows)
    return rows;
}

async function searchUser(user){
    const conn = await connecting();
    const sql = "SELECT p.id_person FROM personagens as p inner join login as l on p.id_person = l.id_person where l.nome = ? and l.senha = ?;";
    const values = [user.user, user.password];
    const [rows] = await conn.query(sql, values);
    console.log("rows", rows)
    return rows;
}

async function insertCustomer(customer){
    const conn = await connecting();
    const sql = 'insert into clientes(nome) values (?);';
    const values = [customer.nome];
    return await conn.query(sql, values);
}

async function updateCustomer(id, customer){
    const conn = await connecting();
    const sql = 'update clientes set nome=? where codigo=?';
    const values = [customer.nome, id];
    return await conn.query(sql, values);
}

async function deleteCustomer(id){
    const conn = await connecting();
    const sql = 'delete from clientes where codigo=?;';
    return await conn.query(sql, [id]);
}

module.exports = {selectCustomers, insertCustomer, updateCustomer, deleteCustomer, searchUser}