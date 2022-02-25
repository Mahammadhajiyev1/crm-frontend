import React from "react";
import PropType from "prop-types";
import "./MessageHistory.style.css";

export const MessageHistory = ({ message }) => {
  if (!message) return null;
  return message.map((row, i) => (
    <div key={i} className='message-history mt-3'>
      <div className='send font-weight-bold text-secondary'>
        <div className='sender'>{row.sender}</div>
        <div className='date'>
          {row.messageAddedAt && new Date(row.messageAddedAt).toLocaleString()}
        </div>
      </div>
      <div className='message'>{row.message}</div>
    </div>
  ));
};

MessageHistory.prototype = {
  message: PropType.array.isRequired,
};
