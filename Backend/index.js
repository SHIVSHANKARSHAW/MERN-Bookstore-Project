import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 3001;

const URL = process.env.MongoDBURL;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("This Server is Connected to MongoDB Database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Hey Hey Not Bad : )");
});

// Defining Routes
app.use("/book", bookRoute);

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});
