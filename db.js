const oracledb = require('oracledb');

const dbConfig = {
    user: 'TVICHIE_66',
    password: 'STUD',
    connectString: '193.226.34.57:1521/orclpdb.docker.internal'
};

async function getConnection() {
    try {
        return await oracledb.getConnection(dbConfig);
    } catch (err) {
        console.error('Eroare la conectarea cu baza de date:', err);
        throw err;
    }
}

module.exports = { getConnection };
