// mongoService.js
import mongoose from "mongoose";

// Connect to MongoDB
mongoose
  .connect("mongodb://0.no0.0.0:27017/Login_data")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log("failed to connect to MongoDB:", error);
  });

// Create a schema and model
const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const collection = mongoose.model("collection", newSchema);

// exports  = {
//   collection,
// };
