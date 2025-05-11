const oracledb = require('oracledb');

async function connectToOracle() {
  try {
    const connection = await oracledb.getConnection({
      user: "TVICHIE_66",  // Numele de utilizator
      password: "STUD",  // Parola
      connectString: "193.226.34.57:1521/orclpdb.docker.internal"  // Detalii de conexiune
    });

    console.log('Connected to Oracle!');

    // Execută o interogare de test, de exemplu, pentru a verifica conexiunea
    const result = await connection.execute('SELECT * FROM dual');
    console.log(result);

    await connection.close();
  } catch (err) {
    console.error('Error connecting to Oracle:', err);
  }
}

connectToOracle();
