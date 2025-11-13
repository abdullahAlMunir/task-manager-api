import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";

import {
    PORT, DATABASE, WEB_CACHE, REQUEST_NUMBER, REQUEST_TIME, URL_ENCODING,MAX_JSON_SIZE
} from "./app/config/config.js";

import router from "./routes/api.js";

const app = express();

// App use default Middleware

app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({extended: URL_ENCODING}));
app.use(helmet());




// App use Limiter

const limiter = rateLimit({windowMs: REQUEST_TIME,  max: REQUEST_NUMBER});
app.use(limiter);

// cache



// Database Connection

mongoose.connect(DATABASE, {autoIndex: true}).then( () => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection error:", err);
})

app.set("etag", WEB_CACHE);
app.use("/api", router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});