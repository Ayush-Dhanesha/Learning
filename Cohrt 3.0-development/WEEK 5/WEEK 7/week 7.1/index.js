const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {z} = require("zod");

mongoose.connect("mongodb+srv://adlonelyking:Ayush123@cluster0.yogfj.mongodb.net/todos7-2")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {

        const requireBody = z.object({
            email: z.string().min(1).max(255).email(),
            name: z.string().min(1).max(25),            
            password: z.string().min(1).max(255)
        }).strict();

        // const parsedBody = requireBody.parse(req.body);
        const parsedWithSuccess = requireBody.safeParse(req.body); 

        if (!parsedWithSuccess.success) {
            res.status(400).json({
                message: parsedWithSuccess.error.issues[0].message
            })
            return;
        }

        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;

        let errorThrown = false;
    try {
        const hasedPassword = await bcrypt.hash(password, 10);
    
        await UserModel.create({
            email: email,
            password: hasedPassword,
            name: name
        });
        
        res.json({
            message: "You are signed up"
        })
    } catch(e) {
        res.status(407).json({
            message: "user already exists"
        })
    }
});

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    });

    const passwordMatch = bcrypt.compare(password, user.password);
    if (user && passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});

app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);