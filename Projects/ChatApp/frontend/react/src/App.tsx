
import {useState,useRef, useEffect } from 'react';
import './App.css'


function App() {

  const [message, setMessage] = useState(["hi there!" ,"how are you?" ,"hello!" ,"good morning!" ,"good night! ","hi!"]);

  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('WebSocket connection established');
    };
    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessage((prevMessages) => [...prevMessages, newMessage]);
    };
    wsRef.current = socket;

    socket.onopen = () => {
      socket.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      
      })

    )};
    return () => {  
      socket.close();
    }
    
  });

  return (
      <div className="flex flex-row justify-center items-center bg-black h-screen w-screen">
        <div className="bg-gray-400 rounded-3xl h-[600px] w-[500px] shadow-lg flex flex-col items-center justify-between gap-4 pb-8">
          <h1 className="text-3xl font-bold text-black py-2 ">Chat App...!</h1>

          {message.map(message => 
            <div key={message} className="flex flex-row justify-center items-center">
              <span  className="bg-gray-800 text-white px-3 py-1 rounded-lg shadow-md">
              {message}
            </span>
            </div>
          )}                     
          <input
          id='message'
            type="text"
            placeholder=" Enter your message"
            className="bg-gray-700 text-white py-3 h-[100px] w-[400px] rounded-lg hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
          /> 
          <button onClick={
            () => {
              
                if (wsRef.current) {
                  wsRef.current.send(JSON.stringify({
                    type:"chat",
                    payload: {
                      message: message
                    }
                  }));
                } else {
                  console.error("WebSocket is not connected.");
                }
            }
          } className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out">
            Send Message
          </button>
          
        </div>
      </div>
  );
}


export default App
