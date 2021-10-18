const express = require("express");
const app = express();
const PORT = 8081;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const DB_URL = `mongodb+srv://ex6:${"Nodejs"}@cluster0.83wye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.get('/', (req, res) => {
  res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;
app.use("/note", require("./routes/NotesRoutes"))

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});


app.listen(PORT, () => console.log("app running"))

