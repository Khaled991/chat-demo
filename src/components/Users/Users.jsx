import React from 'react';

import { ReactComponent as Search } from '../../assets/icons/search.svg';
import './Users.scss';

const Users = ({ img, name }) => {
  return (
    <div className="users-container">
      <div className="users-header-container">
        <div className="messages-title-number-container">
          <span className="messages-title">Messages</span>
          <div className="messages-receve-number">0</div>
        </div>
        <div className="search-box">
          <Search fill="#6c718b" className="search-icon" />
          <input className="search-input" placeholder="Search" type="text" />
        </div>
      </div>
      <div className="my-friends-container">
        {Array.from({ length: 1 }).map(() => (
          <div className="friend">
            <div className="image-name-message-sent">
              <img src={img} alt="userImage" className="user-image" />
              <div className="name-messages-sent">
                <span className="friend-name">{name}</span>
                <span className="message-sent-in-users">voice messages</span>
              </div>
            </div>
            <div className="messages-number-last-seen">
              <span className="last-seen">15 min ago</span>
              <div className="messages-receve-number">6</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
