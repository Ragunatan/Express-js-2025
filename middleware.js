const express = require("express");
const app = express();
const PORT = 3000;

// Custom Middleware to Add req.user
const addUserMiddleware = (req, res, next) => {
    req.user = "Ragu";  // Adds 'user' property to the req object
    console.log("Middleware executed: User set to Guest");
    next();  // Moves to the next middleware or route handler
};

// Route with Middleware
app.get("/welcome", addUserMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
