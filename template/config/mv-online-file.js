var mv = require('mv')
var del = require('del')

// del
var delPath = __dirname + '/../output'
del.sync(delPath)
console.log('del: ' + delPath)


mv('online', 'output', function(err) {
  if (err){throw err}
  console.log('mv done')
});
