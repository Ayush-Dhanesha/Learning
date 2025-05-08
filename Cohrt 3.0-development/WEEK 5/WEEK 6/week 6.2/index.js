 const express = require('express');
 const jwt = require('jsonwebtoken');
 
 const JWT_SECRET = "ayush123";
 const app = express();
 
 app.use(express.json());

 const users =[];
 
app.post('/sign-up', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

   if (username && password) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                res.send('User already exists');
                return;
            }
        }

       users.push({
           username: username,
           password: password
       })

       res.json({
           message: 'User created'
       });
   
    }
    console.log(users);
});

app.post('/sign-in', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    let founduser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            founduser = users[i];
            break;
        }
    }

    if(!founduser){
        res.json({
            message: 'Invalid username or password'
        });
        return;
    }
    else{
        const token = jwt.sign({
            username: founduser.username
        }, JWT_SECRET);

        founduser.token = token;
        res.json({
            token
        });
}
    
});

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        req.username=decodedData.username;
        next();
    }
    else{
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}

app.get('/me',auth, function(req, res){
    
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        let founduser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === req.username) {
                founduser = users[i];
                }
        }

        res.json({
            username: founduser.username,
            password: founduser.password
        });
    }
});

app.listen(3000);