const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql");
const cors = require("cors");

//hash password
//if email already in db alert
//wrong emailor pass



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cors());


const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "rzQ)2D?/",
  database: "registration"
});

app.post("/signup", (req, res) => {

const email = req.body.email
const password = req.body.password

  db.query("INSERT INTO users (email, password) VALUES (?,?)", [email, password], 
    (err, result) => {
      console.log(err)
      console.log(result)
    }
  );
})


app.get("/login", (req, res) => {

  
const email = req.body.email
const password = req.body.password

  db.query("SELECT FROM users WHERE email = ? AND password = ?", [email, password], 
    (err, result) => {
      if(err){
        res.send({err:err});
      }
      if (result.length > 0) {
        res.send(result)
      } else {
        res.send({message: "Wrong email/password"});
      }
    }
  );
})

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
