const express = require("express");

const app = express();

function middleware(req, res, next) {
    console.log("Method is " + req.method);
    console.log("Method is " + req.url);
    console.log("new Date() is " + new Date());
}
app.use(middleware);

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});
app.listen(3000);