import React from 'react';
import { ReactComponent as Mic } from '../../assets/icons/mic.svg';
import { ReactComponent as Emoji } from '../../assets/icons/emoji.svg';
import { ReactComponent as Attachment } from '../../assets/icons/attachment.svg';

import './TypingArea.scss';

const TypingArea = () => {
  return (
    <div className="typing-area">
      <div className="leading">
        <Attachment className="message-input-icon" />
        <Emoji className="message-input-icon" />
      </div>
      <input
        className="messages-input"
        placeholder="Write a message..."
        type="text"
      />
      <div className="trailing">
        <Mic className="message-input-icon" />
        <Mic className="message-input-icon" />
      </div>
    </div>
  );
};

export default TypingArea;
