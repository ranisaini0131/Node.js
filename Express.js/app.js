const express = require('express');
const app = express();

app.get('', (req, res) => {
    console.log("Data sent by browser", req.query.name);// req stores all data
    res.send("<h1>Welcome, to the home page</h1>");
});

app.get('/about', (req, res) => {
    res.send(`
    <input type="text" placeholder="User Name" value="${req.body.name}"/>
    <button>Click me</button>
    `);
});

app.get('/help', (req, res) => {
    res.send([
        {
            name: "Rani",
            email: "sainihs@gmail.com"
        },
        {
            name: "Rakhi Singh",
            email: "dfgjhdd@gmail.com"
        }
    ]);
});

port = 3001;
app.listen(port, () => {
    console.log("Server is running on port 3000");
});

