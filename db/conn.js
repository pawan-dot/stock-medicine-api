const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Store-Medicine-API";
mongoose.connect(url, {}).then(() => {
  console.log("connection done");
});
