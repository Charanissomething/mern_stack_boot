const exp = require('express');
const app = exp();
const port = process.env.PORT || 5010;

app.get("/", function(req, res) {
    res.send("HELLO WORLD!!!");
});
app.listen(port, function() {
    console.log("server running on http://localhost:" + port);
});
