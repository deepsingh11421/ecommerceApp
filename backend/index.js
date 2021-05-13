const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/',require('./routes/index'));

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});