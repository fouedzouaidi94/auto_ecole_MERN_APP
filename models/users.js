const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  cin:{type: String, required:true},
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  birthday: { type: String, required: true },
  email: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  userType:{type: String, required:true}
});
module.exports=User=mongoose.model("user", UserSchema)

