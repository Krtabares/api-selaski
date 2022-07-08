const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT idOrder, idUser, OrderNumber, DateTime, ProviderName, Observation, TotalValue, Status, DateCreated
    FROM orders LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }

}


async function create(order){
    const result = await db.query(
      `INSERT INTO orders
      (idUser, OrderNumber, DateTime, ProviderName, Observation, TotalValue, Status, DateCreated)
      VALUES
      (${order.idUser}, \'${order.OrderNumber}\', \'${order.DateTime}\', \'${order.ProviderName}\', 
      \'${order.Observation}\',  \'${order.TotalValue}\',  ${order.Status}, NOW() )`
    );
  
    let message = 'Error in creating Order';
    if (result.affectedRows) {
      message = 'Order created successfully';
    }
  
    return {message};
  }

async function update(id, order){
    const result = await db.query(
      `UPDATE orders
      SET  OrderNumber=${order.OrderNumber}, DateTime= \'${order.DateTime}\',
        ProviderName=\'${order.ProviderName}\', Observation=\'${order.Observation}\',
        TotalValue=\'${order.TotalValue}\', Status=${order.Status}
      WHERE idOrder=${id}` 
    );
  
    let message = 'Error in updating order';
  
    if (result.affectedRows) {
      message = 'Order updated successfully';
      
    }
  
    return {message};
  }

async function remove(id){
    const result = await db.query(
      `DELETE FROM orders WHERE idOrder=${id}`
    );
  
    let message = 'Error in deleting order';
  
    if (result.affectedRows) {
      message = 'Order deleted successfully';
    }
  
    return {message};
  }

  module.exports = {
    getMultiple,
    create,
    update,
    remove
  };