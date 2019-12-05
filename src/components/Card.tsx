import React from 'react';

interface ICard {
  className?: string;
}

export const Card: React.FC<ICard> = props => (
  <div className={`Card ${props.className}`}>
    <div className="Card__content">{props.children}</div>
  </div>
);
