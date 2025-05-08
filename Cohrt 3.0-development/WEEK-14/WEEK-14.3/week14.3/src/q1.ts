interface User {
    name: string;
    age: number;
    email: string;
    id: number;
    password: string;
}

type UpdateUser = Partial<User> & { id: number };

function updateUser(user: User, updates: UpdateUser): User {
    return { ...user, ...updates };
}

const user1: User = {
    name: "john",
    age: 30,
    email: "john@gmail.com",
    id: 1,
    password: "123456",
};

const updates1: UpdateUser = {
    name: "john",
    age: 30,
    email: "john@gmail.com",
    id: 1,
   
};

console.log(updateUser(user1, updates1));