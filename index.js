const express = require("express");
const methodOverride = require("method-override"); // unused
const session = require("express-session");
const app = express();
const port = 3000;

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

const routes = require("./routes/routes.js");

app.use("/", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));