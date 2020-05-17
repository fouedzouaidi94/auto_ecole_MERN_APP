const mongoose = require("mongoose");
const schema = mongoose.Schema;
const VehicleSchema = new schema({
  registrationNumber:{type: String, required:true},
  mark: { type: String, required: true },
  type: { type: String, required: true }
});
module.exports=Vehicle=mongoose.model("vehicle", VehicleSchema)

