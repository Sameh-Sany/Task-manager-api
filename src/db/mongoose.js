const mongoose = require("mongoose");
const dbc =
  "mongodb+srv://taskapp:<password>@cluster0.sgnux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbc);
