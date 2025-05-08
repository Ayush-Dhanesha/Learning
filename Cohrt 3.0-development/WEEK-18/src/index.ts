import { Client } from "pg";

const pgClient = new Client("postgresql://TODOdb_owner:npg_0DV7YHGvUQMt@ep-damp-boat-a4zilal0-pooler.us-east-1.aws.neon.tech/TODOdb?sslmode=require")

// const pgClient= new Client({
//     user :"TODOdb_owner",
//     password :"npg_0DV7YHGvUQMt",
//     port :5432,
//     host :'ep-damp-boat-a4zilal0-pooler.us-east-1.aws.neon.tech',
//     database :'TODOdb',
//     ssl : true
// })

async function main() {
    await pgClient.connect();
    console.log("Connected to Postgres database");
    const res = await pgClient.query("SELECT * FROM users;");
    console.log(res.rows);
}

main()
    .catch((err) => console.error(err))
    .finally(() => pgClient.end());
// const { Client } = require('pg');