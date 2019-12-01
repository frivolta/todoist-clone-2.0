import React from 'react';

export const Header: React.FC = props => {
  return (
    <div className="Header">
      <div className="Header__left">
        <div className="Icon Icon__menu">
          <img src="/images/burger-menu.svg" alt="burger menu" />
        </div>
        <div className="Button" role="button" onClick={() => console.log('clicked')}>
          <img className="Button__icon" src="/images/plus.svg" alt="button icon" />
          <span className="Button__label">New Task</span>
        </div>
      </div>
      <div className="Header__right">
        <div className="Icon Icon__darkmode">
          <img src="/images/darkmode.svg" alt="darkmode" />
        </div>
      </div>
    </div>
  );
};
