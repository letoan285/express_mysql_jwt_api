const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into products(name, price, description, image, category_id, supplier_id) 
                values(?,?,?,?,?,?)`,
      [
        data.name,
        data.price,
        data.description,
        data.image,
        data.category_id,
        data.supplier_id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getProductById: (id, callBack) => {
    pool.query(
      `select id,name, price, description, image, category_id, supplier_id from products where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getProducts: callBack => {
    pool.query(
      `select id,name, price, description, image, category_id, supplier_id from products`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateProduct: (data, callBack) => {
    pool.query(
      `update users set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteProduct: (data, callBack) => {
    pool.query(
      `delete from users where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
