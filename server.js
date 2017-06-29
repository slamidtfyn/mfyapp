const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.use(express.static('app'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/app/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})