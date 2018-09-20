var knex = require('knex')({
    client: 'mysql',
    connection: {
      host     : 'localhost',
      user     : 'root',
      password : 'password',
      database : 'task',
      charset  : 'utf8'
    }
  });
  
  var bookshelf = require('bookshelf')(knex);
  
  var User = bookshelf.Model.extend({
    tableName: 'Todo',
    idAttribute: 'todo_id'
  });
module.exports = User;
