import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import routes
import userRouter from "./routes/user.routes.js";

// Use routes
app.use("/api/v1/users", userRouter);

// Fallback route for debugging (optional)
app.get("*", (req, res) => {
    res.status(404).json({ message: "Route not found" });
});

export { app };
