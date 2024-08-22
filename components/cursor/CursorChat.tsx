import CursorSVG from "@/public/assets/CursorSVG";
import { CursorChatProps, CursorMode } from "@/types/type";
import React, { Fragment } from "react";

const CursorChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: e.target.value });
    setCursorState({ mode: CursorMode.Chat, previousMessage: null, message: e.target.value });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCursorState({
        mode: CursorMode.Chat,
        previousMessage: cursorState.message,
        message: cursorState.message,
      });
    }
    if (e.key === "Escape") {
      setCursorState({ mode: CursorMode.Hidden });
    }
  };

  return (
    <div className="absolute top-0 left-0" style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}>
      {cursorState.mode === CursorMode.Chat && (
        <Fragment>
          <CursorSVG color="#000" />
          <div
            className="absolute top-2 left-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]"
            onKeyUp={(e) => e.stopPropagation()}
          >
            {cursorState.previousMessage && <div>{cursorState.previousMessage}</div>}
            <input
              className="z-10 bg-transparent text-white placeholder-blue-300 w060 border-none outline-none"
              type="text"
              autoFocus={true}
              placeholder={cursorState.previousMessage ? "" : "Type a message..."}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={cursorState.message}
              maxLength={50}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default CursorChat;
