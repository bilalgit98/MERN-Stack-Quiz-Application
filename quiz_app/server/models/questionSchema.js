import mongoose from "mongoose";
const { Schema } = mongoose;

//question model
const questionModel = new Schema({
  questions: { type: Array, default: [] },
  answers: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

// "Questions" is the name of the model
//"questionModel" is the schema
export default mongoose.model("Questions", questionModel);
