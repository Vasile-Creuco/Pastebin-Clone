let mysql = require('./connect_db');

//create a table
function createTableDb() {
    mysql.connection.query("CREATE TABLE pastebin (id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, content VARCHAR(100));",
        (err) => {
            if (err) throw err;

            console.log('New table created');
        });
}

//insert content into table
function insertContent(text) {
    let sql = "INSERT INTO pastebin (id, content) VALUES ?";
    let values = [
        ['0', text]
    ];
    mysql.connection.query(sql, [values], 
        (err) => {
            if (err) throw err;

            console.log('Content inserted');
        });
}

//show table from database
function showContent() {
    mysql.connection.query("SELECT * FROM pastebin;",
    (err, rows) => {
        if (err) throw err;
        console.log('Show content');
        console.log(rows);
    });
}

//delete content from table
function deleteTable() {
    mysql.connection.query("DROP TABLE IF NOT EXISTS pastebin;",
    (err) => {
        if (err) throw err;

        console.log('Table deleted');
    });
}

module.exports = {createTableDb, insertContent, showContent, deleteTable};