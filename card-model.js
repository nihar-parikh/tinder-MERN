import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, //not working....
    trim: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const cards = mongoose.model("cards", cardSchema);
export default cards;

//export default mongoose.model("cards", cardSchema);
