import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const client = new PrismaClient();

app.get("/users", async (req, res) => {
    const users = client.user.findMany();
    res.json({users});
});

app.get("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const user = client.user.findUnique({
        where: {
            id: Number(id),
        },
        select: {
           todos: true
        }
    });
    res.json({user});
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
async function main() {
   await client.user.create({
        data: {
          username: "ayush",
          password: "ayush123",
          age: 20,
          city: "Delhi"
        },
      });
}

main()
  .catch((e) => {
    throw e;
  })