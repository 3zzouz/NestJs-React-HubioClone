import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatMessage from "./ChatMessage";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [socket, setSocket] = useState(null);
  let user = JSON.parse(localStorage.getItem("user"));
  const roomName = user.user.userName == "testtest" ? "room2" : "room1";
  const newSocket = io("http://localhost:8001");
  useEffect(() => {
    //setAuth(JSON.parse(localStorage.getItem("user")));
    //console.log("auth :", auth);
    //to connect to socketio server
    newSocket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });
    //to chat publicly
    //  newSocket.on("message", (message) => {
    //    setMessages((prevMessages) => [...prevMessages, message]);
    //});

    if (newSocket) {
      newSocket.emit("joinRoom", roomName);
    }
    //to chat in a room
    newSocket.on("messageInRoom", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log("message received :", message);
    });
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.emit("sendMessageInRoom", {
        from: { senderName: user.user.userName, senderImage: user.user.file },
        data: messageInput,
        time: new Date().getHours() + " : " + new Date().getMinutes(),
        room: roomName,
      });
      setMessageInput("");
    }
  };

  return (
    <div className="overflow-hidden">
      <h1>Chat Room</h1>
      <div>
        <div className="overflow-y-auto overflow-x-hidden">
          {messages.map((message, index) => (
            <div key={index}>
              <ChatMessage
                message={message}
                isSender={message.from.senderName == user.user.userName}
              />
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
