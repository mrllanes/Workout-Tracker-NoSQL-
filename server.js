const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/workoutTracker",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, () => {
	console.log("App running on port 3000!");
});
