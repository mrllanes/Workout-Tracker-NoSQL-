const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();

mongoose.connect("mongodb://localhost/test", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workoutTracker";
const collections = ["exercises"];

const db = mongojs(databaseUrl, collections);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	// we're connected!
});

db.on("error", (error) => {
	console.log("Database Error:", error);
});

app.listen(3000, () => {
	console.log("App running on port 3000!");
});
