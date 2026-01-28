const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let department = [
    { id: 1, name: "IT" },
    { id: 2, name: "DBT" }
];

app.get("/", (req , res) => {
    res.send('Miss.Mintra Ritidet');
});

app.listen(PORT, () => {
    console.log("Server Starting on port", PORT);
});

app.get("/department", (req, res) => {
    res.send(department);
});

app.post("/department", (req, res) => {
 let newDepartment = {
    id: department.length + 1,
    name: req.body.name
 };
    department.push(newDepartment);
    res.send(department);
});
