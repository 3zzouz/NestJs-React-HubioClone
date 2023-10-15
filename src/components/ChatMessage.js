import React from "react";

const ChatMessage = ({ message, isSender }) => {
  const messageClass = isSender
    ? "bg-blue-500 text-white ml-auto"
    : "bg-gray-200 text-gray-800";
  const containerClass = isSender ? "justify-end" : "justify-start";

  return (
    <div className={`flex ${containerClass} mx-auto mb-4 w-4/5 items-start`}>
      {!isSender && (
        <div className="mr-2 h-10 w-10 rounded-full bg-gray-400">
          <img
            src={
              "http://localhost:5000/app/file/users/" + message.from.senderImage
            }
            alt="Sender's Avatar"
            className="h-full w-full rounded-full"
          />
        </div>
      )}
      <div className={`max-w-xs rounded-lg p-3 shadow-md ${messageClass}`}>
        <p className="text-sm">{message.data}</p>
        <div className="mt-1 text-xs text-gray-400">
          {message.time}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
