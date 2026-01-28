const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req , res) => {
    res.send('Miss.Mintra Ritidet');
});

app.listen(PORT, () => {
    console.log("Server Starting on port", PORT);
});

