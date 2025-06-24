const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://SmartCensus:EMc0s11FgdvVEgSN@cluster0.f6qfi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("SmartCensus");
const collectionUser = db.collection("Users");
const collectionCitizen = db.collection("Citizens");
const collectionNewBorn = db.collection("NewBorns");
const collectionNewDead = db.collection("NewDeads");

module.exports = {
  db,
  collectionUser,
  collectionCitizen,
  collectionNewBorn,
  client,
  collectionNewDead,
};
