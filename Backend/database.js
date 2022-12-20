const express = require('express');
const mysql = require('mysql2')

const app = express();

// Set up the MySQL connection
const connection = mysql.createConnection({
  host: '152.69.187.107',
  user: 'myuser',
  password: 'mypass',
  database: 'metakey'
});

// Connect to the database
connection.connect();

// Test the connection

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  connection.query('SELECT * FROM metakey', (error, results) => {
    if (error) throw error;
    console.log(results)
    res.send(results);
  });
});


app.get('/unique_edition', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  connection.query('SELECT id,unique_edition, edition FROM metakey', (error, results) => {
    if (error) throw error;
    const total = results.reduce((acc, current) => acc + current.unique_edition, 0);
    
        // Calculate the percentage of each unique_edition value
        const percentageData = results.map((item) => {
          return {
            ...item,
            percentage: Math.round((item.unique_edition / total) * 100), // Round the percentage to the nearest whole number
          };
        });
    res.send(percentageData);
  });
});

app.get('/distribution', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  connection.query('SELECT edition,distribution FROM metakey', (error, results) => {
    if (error) throw error;
    console.log(results)
    res.send(results);
  });
});



// Start the server
const port = 3003;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});