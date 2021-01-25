const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

var bodyParser = require('body-parser');
 
global.__basedir = __dirname;
 
const db = require('./config/db.config.js');

const User = db.User;

let router = require('./routers/router.js');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}




// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);

// Create a Server
const server = app.listen(PORT, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at https://%s:%s", host, port); 
})

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  User.sync().then(() => {
    const users = [
      { email: 'Dana@gmail.com', password: 'Iamdana'},
      {email: "londa@gmail.com", password: "iamlonda"}
    ]
    
    for(let i=0; i<users.length; i++){
      User.create(users[i]);
    }
  })
}); 


