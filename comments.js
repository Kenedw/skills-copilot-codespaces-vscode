// Create web server
// Create a web server using the express module.
// The server should listen on port 3000.
// The server should respond to GET requests to the /comments path.
// The server should respond with a JSON object that looks like this:
// {
//   "comments": [
//     "Comment 1",
//     "Comment 2",
//     "Comment 3"
//   ]
// }
// The Content-Type in the response header should be application/json.
// Use the express module.

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send({
    comments: [
      "Comment 1",
      "Comment 2",
      "Comment 3"
    ]
  });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
