const { Pool } = require('pg');

const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'phones_sales',
  password: 'rooot553',
  port: 5432,
};

const pool = new Pool(connectionOptions);

process.on('beforeExit', () => pool.end());

// pool
// .query('SELECT CURRENT_DATE')
// .then(res => console.log('res :>> ', res.rows[0]))
// .catch(err => console.log('err :>> ', err))

// pool
// .query('SELECT * FROM users')
// .then(res => console.log('res :>> ', res.rows))
// .catch(err => console.log('err :>> ', err))

// const id = 1;
// (async () => {
//   try{
//     const user = await pool.query(`
//     SELECT *
//     FROM users
//     WHERE id = $1`
//     ,[id])
//     console.log('id :>> ', id);
//     console.log('user.rows[0] :>> ', user.rows[0]);
//   } catch(err) {
//     console.log('err :>> ', err);
//   }
// }) ();

const fl = 'Petro2';
const ls = 'Petrenko2';
(async () => {
  try {
    const fullname = await pool.query(
      `
    SELECT *
    FROM users
    WHERE first_name = $1 AND last_name = $2
    `,
      [fl, ls]
    );

    console.log('fullname.rows[0] :>> ', fullname.rows[0]);
  } catch (err) {
    console.log('err :>> ', err);
  }
})();

const customer_id = 1;
const created_at = '2026-02-02';
(async () => {
  try {
    const order = await pool.query(
      `
  INSERT INTO orders(user_id, created_at)
  VALUES($1, $2)
  RETURNING *
  `,
      [customer_id, created_at]
    );
  } catch (err) {
    console.log('err :>> ', err);
  }
})();

class User {
  static async create ({ first_name, last_name, email, tel }) {
    try {
      const insertQuery = `
      INSERT INTO users (first_name, last_name, email, tel)
      VALUES('${first_name}', '${last_name}', '${email}', '${tel}')
      RETURNING *
      `;

      const createdCustomer = await pool.query(insertQuery);
      return createdCustomer.rows[0];
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
  static getAll ({ limit, offset }) {}
  static getById (id) {}
  static updateById (id, { firs_name, last_name, email, tel }) {}
  static deleteById (id) {}
}

const newCustomer = {
  first_name: 'Test34',
  last_name: 'testovych34754',
  email: 'mail1001@gmail.com',
  tel: '+38012336710',
};

User.create(newCustomer).then(data => console.log('data :>> ', data));
