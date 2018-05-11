const https = require("https");

const ikey = "AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY";

const getAddr = (num, query, key) => {
	query = decodeURIComponent(query);
	key = key || ikey;
	return "https://www.googleapis.com/customsearch/v1element?searchtype=image&key=" + key + "&rsz=filtered_cse&num=" + num + "&hl=en&prettyPrint=false&source=gcsc&gss=.com&sig=d5630e36052d1355ead71530c29be9ea&cx=015312774788031955566:mcuhapakhse&q=" + query + "&cse_tok=ABPF6Hi7gJgBU49Nt8F37dkaMXdKbidngQ:1526026077053&sort=&googlehost=www.google.com&oq=" + query + "&nocache=1526026078043";
};

const getResults = (url, cb) => {
	let results = "";
	https.get(url, res => {
		res.setEncoding("utf8");
		res.on("data", chunk => {
			results += chunk;
		});
		res.on("end", () => {
			cb(results);
		});
	}).on("error", e => {
		cb(e);
	});
};

module.exports = {getAddr, getResults};
