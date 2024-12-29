// Import necessary modules
import express from "express";

const app = express();

// Middleware to parse JSON request bodies
// Limits the size of incoming JSON payloads to 16kb
app.use(express.json({ limit: "16kb" }));

// Middleware to parse URL-encoded request bodies (e.g., form submissions)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//routes import
import productRoutes from "./routes/product.route.js"

//routes declaration
app.use('/api/products', productRoutes);

export { app };