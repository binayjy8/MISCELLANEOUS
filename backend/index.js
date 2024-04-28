const express = require("express");
const app = express();
const port = 8080;

app.post("/register", (req, res) => {
    res.send("POST response");
});

app.get("/register", (req, res) => {
    res.send("GET response");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});