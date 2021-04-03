const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		default: () => new Date(),
	},
	exercises: [
		{
			type: {
				type: String,
				required: "Enter an Exercise Type",
			},
			name: {
				type: String,
				required: "Type in an Exercise name",
			},
			duration: {
				type: Number,
				required: "Enter duration in Minutes",
			},
			weight: {
				type: Number,
			},
			reps: {
				type: Number,
			},
			sets: {
				type: Number,
			},
			distance: {
				type: Number,
			},
		},
	],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
