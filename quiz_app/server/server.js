import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";
const app = express();

//mongodb connection
import connect from "./database/conn.js";
// app middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

//PORT
const PORT = process.env.PORT || 8080;

//creating routes
//api
app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

//starting server when valid connection to mongodb
connect()
  .then(() => {
    try {
      app.listen(PORT, () => [
        console.log(
          `SERVER STARTED ON PORT:${PORT}, "http://localhost:${PORT}" `
        ),
      ]);
    } catch (error) {
      console.log("SERVER CONNECTION FAILED");
    }
  })
  .catch((error) => console.log("DATABASE CONNECTION FAILED"));
