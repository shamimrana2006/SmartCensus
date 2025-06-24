// index.js

const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const {
  db,
  collectionUser,
  collectionCitizen,
  collectionNewBorn,
  collectionNewDead,
} = require("./database/MongoDB");
const cors = require("cors");
// Middleware to parse JSON
app.use(express.json());

app.use(cors());

// Simple API route
app.get("/", (req, res) => {
  res.send("Welcome to Express API!");
});

app.post("/api/users", async (req, res) => {
  try {
    const user = req.body;
    console.log("Received user data:", user);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/api/citizen", async (req, res) => {
  try {
    const user = req.body;
    console.log("Received user data:", user);

    collectionCitizen.insertOne(user, (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
      console.log("User inserted successfully:", result);
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/api/newborn", async (req, res) => {
  try {
    const user = req.body;
    console.log("Received user data:", user);

    collectionNewBorn.insertOne(user, (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
      console.log("User inserted successfully:", result);
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/api/newDeadCertificate", async (req, res) => {
  try {
    const user = req.body;
    console.log("Received user data:", user);

    collectionNewDead.insertOne(user, (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
      console.log("User inserted successfully:", result);
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/NewBorn", async (req, res) => {
  try {
    const newBorn = await collectionNewBorn.find({}).toArray();
    const citizen = await collectionCitizen.find({}).toArray();
    const newDead = await collectionNewDead.find({}).toArray();
    res.status(200).json({
      newBornCount: newBorn.length,
      citizenCount: citizen.length,
      newDeadCount: newDead.length,
      totalPopulation: citizen.length + newBorn.length - newDead.length,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
