import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import { server } from "./src/socket/socket.js";


dotenv.config({
  path: "./.env",
});


connectDB()
  .then(() => {
    server.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!", err);
  });
