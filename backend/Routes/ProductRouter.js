
const express = require("express");
const ensureAuthenticated = require("../Middlewares/Auth");
const router = express.Router();

router.get('/', ensureAuthenticated, (req, res) => {
	res.status(200).json([
		{
			name: "mobile",
			price: "100000"
		},
		{
			name: "tv",
			price: "500000"
		}
	])
});

module.exports = router;
