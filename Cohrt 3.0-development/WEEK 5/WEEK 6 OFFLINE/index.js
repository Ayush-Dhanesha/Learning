const jwt = require('jsonwebtoken');

const values = 
    {
        name : "Ayush",
        account : "123456789",
    }

const token = jwt.sign(values, "secret");
console.log(token);

const decoded = jwt.verify(token, "secret");
console.log(decoded);