const express = require('express');
const path = require('path');//it helps us to access the folder of our own projects

const app = express();
const publicPath = path.join(__dirname, 'public');//gives the path of specified folder

//setting template engine as ejs
app.set('view engine', 'ejs');

// app.use(express.static(publicPath));//loads the content the static files 
app.get('/', (req, res) => {
    const user = {
        name: "Rani",
        email: "sajjk@gmail.com",
        city: "noida",
        skillset: ['HTML.HTML5,CSS,CSS3,JavaScript,Modern JavaScript,Node.js,Expres.js']

    }
    res.render('index', { user });//render method accessing pages template engine ejs
})

app.get('/about', (req, res) => {
    const hobbies = {
        hobbies1: ["Eating","Flying","sleeping"]
    }
    res.render('about', { hobbies });
})

app.get('*', (req, res) => {
    res.render('404');
})





port = 3001;
app.listen(port, () => {
    console.log("Server is running on port 3000");
});

