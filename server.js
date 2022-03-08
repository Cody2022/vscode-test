const express = require("express");

const app = express();
const PORT = 4000;

function echoPortNumber () {
  console.log(`Listening on port ${PORT}`);
  console.log("Listening on port", PORT);
}

app.listen(PORT,   echoPortNumber   );

function hello(req, res) {
  res.send('Hello World!')
}

const hello2 = (req, res) => {
  res.send('Hello World! 2');
}

app.get('/', hello);
app.get('/hello2', hello2);
