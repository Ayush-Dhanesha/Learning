//types vs interfaces
// create two type called useer and admin
//create a fucntion that takes in a user or admin and returns a string welcome _name

type user = {
    name: string;
    age: number;
    email: string;
};

type admin = {
    name: string;
    age: number;
    email: string;
    password: string;
};

function welcome(user: user | admin): string {
    return `welcome ${user.name}`;
}

const user1: user = {
    name: "john",
    age: 30,
    email: "john@gmail.com",
};

const admin1: admin = {
    name: "john",
    age: 30,
    email: "john@gmail.com",
    password: "123456",
};

console.log(welcome(user1));
console.log(welcome(admin1));