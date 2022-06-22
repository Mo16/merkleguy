const { default: mongoose } = require("mongoose");

const userInfoSchema = mongoose.Schema({
  name: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  mint_amount: {
    type: String,
    required: true,
  },
  user_address: {
    type: String,
  },
  datetime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserInfo", userInfoSchema);
