require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const exphbs = require("express-handlebars");
const flash = require('express-flash')
const session = require('express-session');
const { passport, setUser } = require("./utils/passport");

require("./config/mongoose");
require("./config/sequelize");




const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");


app.use(cookieParser());
app.use(
  session({
    cookie: { secure: false },
    resave: false,
    saveUninitialized: true,
    secret: "keyboard cat",
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(setUser);
app.use(flash()); 
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((function (req, res, next) {
  req.flash = (type, message) => {
    req.session.flash = { type, message };
  }

  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
}));

app.use("/", require("./routes/web/home-web-router"));
app.use("/login", require("./routes/web/login-web-router"));
app.use("/profile", require("./routes/web/profile-web-router"));

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs", // default ".handlebars"
  })
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
