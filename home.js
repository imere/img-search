const homeRouter = require("express").Router();
const ejs = require("ejs");

module.exports = homeRouter;

homeRouter.get("/", (req, res, next) => {
	let ctx = {};
	res.render("index.ejs", ctx);
});
