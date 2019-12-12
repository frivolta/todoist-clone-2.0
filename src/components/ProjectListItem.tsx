import React from 'react';
import { IProjectListItemProps } from '../interfaces';

export const ProjectListItem: React.FC<IProjectListItemProps> = props => (
  <div className="ProjectList__item">
    <span
      className={`ProjectList__item__label ${props.active && `ProjectList__item__label--active`}`}
      role="button"
      onClick={props.handleClick}
    >
      {props.children}
    </span>
    <span
      className={`ProjectList__item__button ${props.active && `ProjectList__item__button--active`}`}
      role="button"
      onClick={() => console.log('item deleted')}
    >
      <img src="/images/delete.svg" alt="delete button" />
    </span>
  </div>
);
