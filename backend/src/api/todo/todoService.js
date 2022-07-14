const Todo = require('./todo')

Todo.methods(['get', 'port', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true})