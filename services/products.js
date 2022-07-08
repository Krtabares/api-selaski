const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(id, page = 1){
  const offset = helper.getOffset(page, config.listPerPage);

  const rows = await db.query(
    `SELECT idOrdersProducts, idOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, Status
    FROM ordersproducts WHERE idOrder=${id} `
  );
  const data = helper.emptyOrRows(rows, true);
  const meta = {page};

  return {
    data,
    meta
  }

}


async function create(product){
    const result = await db.query(
      `INSERT INTO ordersproducts
      (idOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, Status)
      VALUES(
        ${product.idOrder},
        \'${product.ValueUnit}\',
        \'${product.Unit}\',
        \'${product.Description}\',
        \'${product.SKU}\',
        ${product.Quantity},
        ${product.QtyBox},
        \'${product.Weight}\',
        \'${product.Volumen}\',
        \'${product.Mark}\',
        ${product.Status})`
    );
  
    let message = 'Error in creating product';
    let id =null;
    if (result.affectedRows) {
      message = 'Product created successfully';
      id = await db.query('SELECT LAST_INSERT_ID()')
    }
  
    return {message,id};
  }

async function update(id, product){
    const result = await db.query(
      `
      UPDATE ordersproducts
        SET idOrder=${product.idOrder}, ValueUnit=\'${product.ValueUnit}\', Unit=\'${product.Unit}\', Description=\'${product.Description}\', SKU=\'${product.SKU}\', Quantity=${product.Quantity}, QtyBox=${product.QtyBox}, Weight=${product.Weight}, Volumen=${product.Volumen}, Mark=\'${product.Mark}\', Status=${product.Status}
        WHERE idOrdersProducts=${id}` 
    );
  
    let message = 'Error in updating product';
  
    if (result.affectedRows) {
      message = 'product updated successfully';
    }
  
    return {message};
  }

async function remove(id){
    const result = await db.query(
      `DELETE FROM ordersproducts WHERE idOrdersProducts=${id}`
    );
  
    let message = 'Error in deleting order';
  
    if (result.affectedRows) {
      message = 'Order deleted successfully';
    }
  
    return {message};
  }

  async function removeAll(id){
    const result = await db.query(
      `DELETE FROM ordersproducts WHERE idOrder=${id}`
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
    remove,
    removeAll
  };