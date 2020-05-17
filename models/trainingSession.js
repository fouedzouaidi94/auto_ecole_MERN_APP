const mongoose = require("mongoose");
const schema = mongoose.Schema;
const trainingSessionSchema = new schema({
  cinCandidate:{type: String, required:true},
  cinMonitor:{type: String, required:true},
  registarionNumber:{type: String, required:true},
  date: { type: String, required: true },
  hour:{type: String,required:true},
  typeTraining: { type: String, required: true },
  });
module.exports=TrainingSession=mongoose.model("Training Session", trainingSessionSchema)

