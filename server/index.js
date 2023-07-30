import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";


/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());


/* MONGOOSE SETUP */

const PORT = process.env.REACT_APP_PORT || 6001;
console.log(PORT + "hi");
mongoose.connect(process.env.REACT_APP_MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Connected with Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));