import { WebSocket,WebSocketServer } from "ws";

interface User{
    socket: WebSocket;
    room: string;
}


const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
let allSockets: User[] = [];

wss.on("connection", (socket) => {
  console.log("New client connected");
  userCount = userCount + 1;
  console.log(`User count: ${userCount}`);
  

  socket.on("close", () => {
    console.log("Client disconnected");
  });

  socket.on("message", (message) => {
    const parsedMesage = JSON.parse(message.toString());
    if(parsedMesage.type === "join"){
        allSockets.push({socket, room: parsedMesage.payload.room});
        console.log(`User joined room: ${parsedMesage.payload.room}`);
    }
    if (parsedMesage.type === "chat"){
        // const currentUserRoom = allSockets.find((s) => s.socket === socket)?.room;
        let currentUserRoom = null;
        for (let i = 0; i < allSockets.length; i++){
            if(allSockets[i].socket === socket){
                currentUserRoom = allSockets[i].room;
                break;
            }
        }
        for (let i = 0; i < allSockets.length; i++){
            if(allSockets[i].room === currentUserRoom && allSockets[i].socket !== socket){
                allSockets[i].socket.send(JSON.stringify({type: "chat", payload: parsedMesage.payload.message}));
                console.log(`Message sent to room: ${currentUserRoom}`);
            }
        }
      }
        });
    });

console.log("WebSocket server is running on ws://localhost:8080")
