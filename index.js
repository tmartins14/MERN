const express = require("express");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const badyParser = require("body-parser");

const keys = require("./config/keys.js");
const bodyParser = require("body-parser");

// Order of these require statements matter - need to define the model before using it
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie Lasts 30 Days
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
