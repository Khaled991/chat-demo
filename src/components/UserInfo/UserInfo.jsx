import React from 'react';

import './UserInfo.scss';

import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Account } from '../../assets/icons/account.svg';
import { ReactComponent as More } from '../../assets/icons/more.svg';

const UserInfo = ({ img, name }) => {
  return (
    <div className="user-info">
      <div className="img-name-last-seen-user-info">
        <img src={img} alt="user" className="image-user-info" />
        <div className="name-last-seen-user-info-constainer">
          <span className="name-user-info">{name}</span>
          <span className="last-seen-user-info">Last seen today at 17:38</span>
        </div>
      </div>
      <div className="actions">
        <Search className="action-icon" />
        <Account className="action-icon" />
        <More className="action-icon" />
      </div>
    </div>
  );
};

export default UserInfo;
