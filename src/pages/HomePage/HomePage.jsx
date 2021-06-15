import React from 'react';
import Users from '../../components/Users/Users';
import NavsComponent from '../../components/NavsComponent/NavsComponent';
import UserInfo from '../../components/UserInfo/UserInfo';
import TypingArea from '../../components/TypingArea/TypingArea';
import FloydMiles from '../../assets/img/Floyd-Miles.jpg';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="users">
        <Users name="Floyd Miles" img={FloydMiles} />
      </div>
      <div className="chat-area">
        <div className="user-info">
          <UserInfo name="Floyd Miles" img={FloydMiles} />
        </div>
        <div className="messages-area"></div>
        <div className="typing-area">
          <TypingArea />
        </div>
      </div>
      <div className="navs">
        <div className="nav-inner">
          <NavsComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
