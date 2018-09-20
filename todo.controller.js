const User = require('./todo.model');
exports.out = show;
exports.search=search;
exports.in=create;
exports.up=update;
exports.del=del;
exports.delall=delall;

function show(req, res) {
    User.fetchAll().then(function (users) {
        users = users.toJSON();
        res.send(users);
    });
}

function search(req, res) {
    User.where("todo_id",req.params.id).fetch().then(function (users) {
        users = users.toJSON();
        res.send(users);
    });
}

function create(req, res) {
    new User({ todo_id: req.body.todo_id, title: req.body.title, description: req.body.description, status: req.body.status, created_date: req.body.created_date, last_update_date: req.body.last_updated_date }).save(null, {method: 'insert'}).then(function (users) {
        users = users.toJSON();
        res.send(users);
    });
}

function update (req,res){
    new User({todo_id: req.body.todo_id })
          .save({
              title: req.body.title ? req.body.title : undefined,
              description: req.body.description ? req.body.description : undefined,
              status: req.body.status ? req.body.status : undefined,
              last_update_date: req.body.last_update_date ? req.body.last_update_date : undefined,
          }, { patch: true, method: 'update' })
          .then(model=> model.toJSON())
          .then(user=> res.json(user));
  }

function del(req, res) {
    new User({todo_id: req.body.todo_id}).destroy().then(function (users) {
        users = users.toJSON();
        res.send(users);
    });
}

function delall(req, res) {
    new User().where({status: req.body.status}).destroy().then(function (users) {
        users = users.toJSON();
        res.send(users);
    });
}