const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://user_laife:hW8GKRdqAG5sTg9E@127.0.0.1:27017/admin/todo_list');
