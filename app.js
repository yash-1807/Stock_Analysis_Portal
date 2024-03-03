const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

const dbConfig = {
    user: 'admin',
    password: 'password',
    connectString: 'stockanalysis.cat8yql1yj30.us-east-1.rds.amazonaws.com:1521/ORCL'
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Serve signin.html when root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/signin.html');
});

// Handle saving user data
app.post('/save_user', async (req, res) => {
  const user_id = Math.floor(Math.random() * 1000000); // Generate a random integer between 0 and 999999

  const { user_name, phone_number, bank_account_number, pan_number } = req.body;

  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const userDetailsSql = `INSERT INTO user_details (user_id, user_name, pan_no) 
                            VALUES (:user_id, :user_name, :pan_number)`;
    const userDetailsBinds = { user_id, user_name, pan_number };
    await connection.execute(userDetailsSql, userDetailsBinds);

    const phoneNumDetailsSql = `INSERT INTO phone_num_details (user_id, phone_num) 
                                VALUES (:user_id, :phone_number)`;
    const phoneNumDetailsBinds = { user_id, phone_number };
    await connection.execute(phoneNumDetailsSql, phoneNumDetailsBinds);

    const bankAccDetailsSql = `INSERT INTO bank_Acc_details (user_id, bank_Account_no) 
                               VALUES (:user_id, :bank_account_number)`;
    const bankAccDetailsBinds = { user_id, bank_account_number };
    await connection.execute(bankAccDetailsSql, bankAccDetailsBinds);

    const phoneAndBankDetailsSql = `INSERT INTO phone_and_bank_details (phone_num, bank_account_num) 
                                    VALUES (:phone_number, :bank_account_number)`;
    const phoneAndBankDetailsBinds = { phone_number, bank_account_number };
    await connection.execute(phoneAndBankDetailsSql, phoneAndBankDetailsBinds);

    await connection.commit();
    await connection.close();

    console.log('Data inserted successfully');

    res.redirect('/signinact.html');
  } catch (error) {
    console.error('Error inserting data:', error);
    if (connection) {
      await connection.close();
    }
    res.status(500).send('Error inserting data');
  }
});

// Sign-in route
app.post('/signin', async (req, res) => {
  const { user_name, pan_number } = req.body;

  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    // Check if user exists in database
    const sql = `SELECT * FROM user_details WHERE user_name = :user_name AND pan_no = :pan_number`;
    const binds = { user_name, pan_number };
    const result = await connection.execute(sql, binds);

    if (result.rows.length > 0) {
      // User authenticated, redirect to index.html
      res.redirect('/home.html');
    } else {
      // Invalid credentials, redirect back to signin.html with error message
      res.redirect('/signin.html?error=invalid_credentials');
    }
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).send('Error signing in');
  } finally {
    if (connection) {
      await connection.close();
    }
  }
});

// Fetch stock data
app.get('/stock/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const connection = await oracledb.getConnection(dbConfig);
        const query = `SELECT sector, company, industry, open_price, close_price,pe_ratio,pb_ratio,roe,profits,assets,liabilities,amount FROM allinfo WHERE stock_id = :id`;
        console.log('Query:', query); // Log the query being executed
        const result = await connection.execute(query, { id });

        console.log('Result:', result); // Log the result obtained

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Stock not found' });
        }

        const stock = result.rows[0];
        res.json(stock);
    } catch (error) {
        console.error('Error fetching stock:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
