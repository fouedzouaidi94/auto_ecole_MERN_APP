const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ExamSchema = new schema({
  listNum:{type: String, required:true},
  convNum: { type: String, required: true },
  date: { type: String, required: true },
  hour: { type: String, required: true },
  cinCandidate: {type: Number, required: true,},
  examType:{type: String, required:true}
});
module.exports=Exam=mongoose.model("exam", ExamSchema)

