import React, { useState, useRef } from "react";
import Picker from "emoji-picker-react";
import socket from "../socket";
import { Trash2 } from "lucide-react";

function Message({ message, userId, roomID, isSender, setMessages }) {
  const [showPicker, setShowPicker] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const timerRef = useRef(null);

  const handleMouseDown = () => {
    timerRef.current = setTimeout(() => setShowPicker(true), 500);
  };

  const handleMouseUp = () => {
    clearTimeout(timerRef.current);
  };

  const handleDeleteForMe = () => {
    socket.emit("delete_for_me", { messageId: message.id });
    setShowMenu(false);
  };

  const handleDeleteForEveryone = () => {
    socket.emit("delete_for_everyone", { messageId: message.id, roomId: roomID });
    setShowMenu(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowPicker(false);
  };

  const handleEmojiClick = (emojiObject) => {
    const emoji = emojiObject.emoji;
    setMessages((prevMessages) =>
      prevMessages.map((m) =>
        m.id === message.id
          ? {
              ...m,
              reactions: {
                ...Object.fromEntries(
                  Object.entries(m.reactions || {}).map(([e, users]) => [
                    e,
                    users.filter((u) => u !== userId),
                  ])
                ),
                [emoji]: [...(m.reactions[emoji] || []).filter((u) => u !== userId), userId],
              },
            }
          : m
      )
    );
    socket.emit("add_reaction", { messageId: message.id, userId, emoji, roomId: roomID });
    setShowPicker(false);
  };

  return (
    <div
      className={`relative flex items-start gap-2 ${
        isSender ? "justify-end" : "justify-start"
      }`}
    >
      {/* Message Bubble */}
      <div
        className={`relative max-w-[80%] backdrop-blur-xl rounded-3xl px-4 py-2 flex items-center justify-between ${
          isSender ? "bg-cyan-500/40 text-white" : "bg-white/10 text-white"
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
      >
        <div className="flex-1">
          <p className="text-sm leading-relaxed">{message.message}</p>
          <p className="text-[10px] mt-1 opacity-50">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <button
          className="ml-2 text-white/70 hover:text-white flex-shrink-0"
          onClick={handleMenuClick}
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Emoji Reactions */}
      <div
        className={`absolute bottom-0 ${
          isSender ? "right-0" : "left-0"
        } transform translate-y-1/2 flex gap-1`}
      >
        {Object.entries(message.reactions || {}).map(
          ([emoji, users]) =>
            users.length > 0 && (
              <span key={emoji} className="text-sm">
                {emoji}
              </span>
            )
        )}
      </div>

      {/* Emoji Picker */}
      {showPicker && (
        <div className="absolute z-10 mt-2">
          <Picker onEmojiClick={handleEmojiClick} width={300} height={400} />
          <button onClick={() => setShowPicker(false)} className="mt-2 text-white">
            Close
          </button>
        </div>
      )}

      {/* Deletion Menu */}
      {showMenu && (
        <div
          className={`absolute top-8 ${
            isSender ? "right-0" : "left-0"
          } bg-gray-900/95 text-white rounded-lg shadow-lg p-2 z-10 animate-fade-in`}
          style={{ minWidth: "140px", maxWidth: "200px" }}
        >
          <button
            onClick={handleDeleteForMe}
            className="block w-full text-left px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700 rounded transition-colors duration-200"
          >
            Delete for Me
          </button>
          {isSender && (
            <button
              onClick={handleDeleteForEveryone}
              className="block w-full text-left px-3 py-1.5 text-sm font-medium text-red-400 hover:bg-red-600 rounded transition-colors duration-200 mt-1"
            >
              Delete for Everyone
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Message;