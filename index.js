const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/check",(req, res) => {
	let num = parseInt(re.body.name);
	let ans = num % 2 == 0 ? "even" : "odd";
	res.send(ans);
})

app.listen(9000, () => { console.log("ready @ 9000"); });