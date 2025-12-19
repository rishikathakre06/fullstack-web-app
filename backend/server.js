const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rishika@06",      
  database: "flipr_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

app.post("/addProject", (req, res) => {
  const { image, name, description } = req.body;
  db.query(
    "INSERT INTO projects (image,name,description) VALUES (?,?,?)",
    [image, name, description],
    () => res.send("Project Added")
  );
});

app.get("/getProjects", (req, res) => {
  db.query("SELECT * FROM projects", (err, result) => {
    res.send(result);
  });
});

app.post("/addClient", (req, res) => {
  const { image, name, description, designation } = req.body;
  db.query(
    "INSERT INTO clients VALUES (NULL,?,?,?,?)",
    [image, name, description, designation],
    () => res.send("Client Added")
  );
});

app.get("/getClients", (req, res) => {
  db.query("SELECT * FROM clients", (err, result) => {
    res.send(result);
  });
});

app.post("/addContact", (req, res) => {
  const { fullname, email, mobile, city } = req.body;
  db.query(
    "INSERT INTO contacts VALUES (NULL,?,?,?,?)",
    [fullname, email, mobile, city],
    () => res.send("Contact Saved")
  );
});

app.get("/getContacts", (req, res) => {
  db.query("SELECT * FROM contacts", (err, result) => {
    res.send(result);
  });
});

app.post("/subscribe", (req, res) => {
  const { email } = req.body;
  db.query(
    "INSERT INTO subscribers VALUES (NULL,?)",
    [email],
    () => res.send("Subscribed")
  );
});

app.get("/getSubscribers", (req, res) => {
  db.query("SELECT * FROM subscribers", (err, result) => {
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
