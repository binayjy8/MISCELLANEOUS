const express = require("express");
const app = express();
const port = 8080;

app.post("/register", (req, res) => {
    res.send("standard POST response");
});

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`standard GET response. welcome ${user}`);
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});