const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', function(req, res) {
  res.send('IronClad Leads is live!');
});
app.listen(PORT, function() {
  console.log('Running on port ' + PORT);
});
