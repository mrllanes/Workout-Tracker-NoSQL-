const router = require("express").Router();
const Workout = require("../model/Workout");

router.post("/api/workouts", async (req, res) => {
	try {
		const dbWorkout = await Workout.create();
		res.json(dbWorkout);
	} catch (err) {
		res.json(err);
	}
});

router.get("/api/workouts/:id", async (req, res) => {
	try {
	} catch (err) {
		res.json(err);
	}
});

module.exports = router;
