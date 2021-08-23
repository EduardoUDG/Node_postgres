// Conexion a postgres con libreria 

const { Pool } = require('pg');
const config = {
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'library'
};


const pool = new Pool( config );

const getBooks = async() => {
    try {
        const res = await pool.query('SELECT * FROM books');
        pool.end(); // Cierra la conexion
    } catch (error) {
        return error;        
    }
}

const insertUser = async() => {
    try {
        const text = 'INSERT INTO users(username, password) VALUES($1, $2)';
        const values = ['Jhon', 'Jhon1234'];
    
        const res = await pool.query( text, values );
        pool.end();
        console.log( res );
    } catch( err ) {
        console.log( err);
    }
}

const deleteUser = async() => {
    try {
        const text = 'DELETE FROM users WHERE username=$1';
        const values = ['Jhon'];
    
        const res = await pool.query( text, values );
        pool.end();
        console.log( res );
    } catch( err ) {
        console.log( err );
    }
}

const editUser = async() => {
    try {
        const text = 'UPDATE users SET username = $1 WHERE username = $2 ';
        const values = ['Jhon', 'Ryan'];

        // const text = 'UPDATE users SET username = $1, password = $2 WHERE username = $3 ';
        //const values = ['Bruce', 'bruce1234', 'Jhon'];
    
        const res = await pool.query( text, values );
        console.log( res );
    } catch( err ) {
        console.log( err );
    }
}


// getBooks();
// insertUser();
// deleteUser();
// editUser();









