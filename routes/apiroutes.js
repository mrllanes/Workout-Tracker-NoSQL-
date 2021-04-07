const router = require("express").Router();
const Workout = require("../models/Workout");

router.post("/api/workouts", async (req, res) => {
	try {
		const dbWorkout = await Workout.create();
		res.json(dbWorkout);
	} catch (err) {
		res.json(err);
	}
});

router.put("/api/workouts/:id", async (req, res) => {
	try {
		const dbWorkout = await Workout.findByIdAndUpdate(
			req.params.id,
			{
				$push: { exercises: req.body },
			},
			{
				new: true,
				runValidators: true,
			}
		);
		res.json(dbWorkout);
	} catch (err) {
		res.json(err);
	}
});

// router.get("/api/workouts", async (req, res) => {
// 	try {
// 		const dbWorkout = await Workout.find();
// 		res.json(dbWorkout);
// 	} catch (err) {
// 		res.json(err);
// 	}
// });

router.get("/api/workouts/range", async (req, res) => {
	try {
		const dbWorkout = await Workout.aggregate([
			{
				$addFields: {
					totalDuration: {
						$sum: "$exercises.duration",
					},
				},
			},
		])
			.sort({ day: -1 })
			.limit(7);
		res.json(dbWorkout);
	} catch (err) {
		res.json(err);
	}
});

router.get("/api/workouts", async (req, res) => {
	try {
		const dbWorkout = await Workout.aggregate([
			{
				$addFields: {
					totalDuration: {
						$sum: "$exercises.duration",
					},
				},
			},
		]);
		res.json(dbWorkout);
	} catch (err) {
		res.json(err);
	}
});

module.exports = router;
