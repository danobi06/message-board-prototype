const sqlite3 = require('sqlite3').verbose();
const server = require('./server')
global.db;

function createDb() {
  db = new sqlite3.Database(':memory:', createChannelsTable);
}

function createChannelsTable() {
  db.run(
    'CREATE TABLE channels (channel TEXT)',
    insertRowsIntoChannelsTable
  );
}

function insertRowsIntoChannelsTable() {
  var stmt = db.prepare('INSERT INTO channels VALUES (?)');

  for (let i = 1; i <= 7; i++) {
    stmt.run("CH_" + i);
  }

  stmt.finalize(createMessagesTable);
}

function createMessagesTable() {
  db.run(
    `CREATE TABLE messages (
      uuid TEXT, 
      channel TEXT, 
      message TEXT, 
      timestamp TEXT,
      FOREIGN KEY (channel) 
      REFERENCES channels (channel) 
      ON UPDATE CASCADE 
      ON DELETE CASCADE)`,
    server
  );
}

function run() {
  createDb();
}

run()