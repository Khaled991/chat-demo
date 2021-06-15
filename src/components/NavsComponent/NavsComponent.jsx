import React from 'react';
import K from '../../assets/img/K.png';
import AnnetteBlack from '../../assets/img/jenny-Wilson.jpg';
import { ReactComponent as Notification } from '../../assets/icons/notification.svg';
import { ReactComponent as Cal } from '../../assets/icons/cal.svg';
import { ReactComponent as Message } from '../../assets/icons/message.svg';
import { ReactComponent as Favourite } from '../../assets/icons/favourite.svg';
import { ReactComponent as Exit } from '../../assets/icons/exit.svg';

import './NavsComponent.scss';

const NavsComponent = () => {
  return (
    <div className="navs-component">
      <img src={K} alt="Kchat" className="k-logo" />
      <div className="icons">
        <Notification fill="#524A7A" className="nave-icons" />
        <Cal fill="#524A7A" className="nave-icons" />
        <Message fill="#524A7A" className="nave-icons" />
        <Favourite fill="#524A7A" className="nave-icons" />
        <Exit fill="#524A7A" className="nave-icons" />
      </div>
      <img src={AnnetteBlack} alt="MyAccountImage" className="my-account-img" />
    </div>
  );
};

export default NavsComponent;
