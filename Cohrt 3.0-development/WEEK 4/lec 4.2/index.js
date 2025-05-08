const express = require('express') // ugly way to do auth because it has lots of bugs and issues in it
const app = express()

 app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId;
     const username = req.headers.username;
     const password = req.headers.password;

     if (username != "sarthak" || password != "123456") { // username and password check
         res.status(403).json({
            msg: "User doesn't exist"
        });
        return;
    }
    if (kidneyId != 1 || kidneyId != 2) { // input validation
        res.status(411).json({
            msg: "wrong inputs"
        });
        return;
    }
    // do something with the kidneys here
    res.send("Your kidneys are healthy");
});

app.listen(3000);