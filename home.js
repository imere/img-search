const homeRouter = require("express").Router();
const ejs = require("ejs");
const {shortenUrl, getUrl} = require("./myModule/urls");

module.exports = homeRouter;

homeRouter.get("/", (req, res, next) => {
	let ctx = {};
	res.render("index.ejs", ctx);
});

const paramValidate = (req, res, next) => {
	let val = req.url.substr(5);
	let shortened = null;
	let formed = /^(https?:\/\/)?(www\.)?[^(www\.)]+\.[\s\S]+$/.test(val);
	if(!formed){
		if(req.query.allow !== "true"){
			return res.send(JSON.stringify({
				"error": "URL invalid"
			}));
		}else{
			shortened = shortenUrl(req, val);
		}
	}else{
		shortened = shortenUrl(req, val);
	}
	req.ourl = val;
	req.surl = shortened;
	next();
};

homeRouter.get(/new\/[\s\S]+/, paramValidate, (req, res, next) => {
	let rt = {};
	rt["original_url"] = req.ourl;
	rt["short_url"] = req.surl;
	res.send(JSON.stringify(rt));
});

homeRouter.get("/:id", (req, res, next) => {
	let rt = {};
	let surl = getUrl(req.params.id);
	if(!surl){
		rt["error"] = "No short url found for given input";
	}else{
		return res.redirect(301, surl);
	}
	res.send(JSON.stringify(rt));
});
