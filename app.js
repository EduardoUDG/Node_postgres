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
        console.log( res );
    } catch( err ) {
        throw new Error( err );
    }
}

// getBooks();
insertUser();











