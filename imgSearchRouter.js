const imgRouter = require("express").Router();
const {getAddr, getResults} = require("./myModule/gApi");
//search results
const results = [];
//restrict max length
const maxres = 10;

//search records
const records = [];
//restrict max length
const maxrec = 10;

module.exports = imgRouter;

imgRouter.param("item", (req, res, next, item) => {
	if(!item){
		return res.sendStatus(404);
	}
	next();
});

imgRouter.get("/imagesearch/:item", (req, res, next) => {
	let query = req.params.item;
	const callback = val => {
		if(records.length > maxrec){
			records.pop();
		}
		if(results.length !== 0){
			results = [];
		}
		records.unshift({
			term: query,
			when: new Date().toISOString()
		});
		if(val.results){
			val.results.forEach(v => {
				results.push({
					"url": v.url,
					"snippet": v.titleNoFormatting,
					"thumbnail": v.tbUrl,
					"context": v.originalContextUrl
				});
			});
		}else{
			results.push(val);
		}
		res.send(JSON.stringify(results));
	};
	getResults(getAddr(maxres, query), callback);
});

imgRouter.get("/latest/imagesearch", (req, res, next) => {
	res.send(JSON.stringify(records));
});
