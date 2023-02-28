import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./Routes/general.js";
import managementRoutes from "./Routes/management.js";
import salesRoutes from "./Routes/sales.js";

// Data Imports
import User from "./models/User.js";
import { dataUser } from "./data/index.js";
import user from "./models/User.js";

// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

// Routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// Mongoose Setup
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    app.listen(PORT, () => console.log(`server Port: ${PORT}`));
    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));
