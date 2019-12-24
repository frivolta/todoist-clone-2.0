import React from 'react';

interface IButton {
  handleClick: () => void;
  text: string;
}

export const Button: React.FC<IButton> = props => {
  return (
    <div className="Button" role="button" onClick={props.handleClick}>
      <img className="Button__icon" src="/images/plus.svg" alt="button icon" />
      <span className="Button__label">{props.text}</span>
    </div>
  );
};
