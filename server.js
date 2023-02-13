const exp = require('express');
const app = exp();
const port = process.env.PORT || 5010;

app.get("/", function(req, res) {
    res.send("iam cherry!!!");
});
app.listen(port, function() {
    console.log("server running on http://localhost:" + port);
});
