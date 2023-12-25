// server.js
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('./'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
