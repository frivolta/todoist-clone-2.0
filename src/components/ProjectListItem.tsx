import React from 'react';

interface IProjectListItem {
  active?: boolean;
}

export const ProjectListItem: React.FC<IProjectListItem> = props => (
  <div className="ProjectList__item">
    <span
      className={`ProjectList__item__label ${props.active && `ProjectList__item__label--active`}`}
      role="button"
      onClick={() => console.log('item clicked')}
    >
      Grocery store
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
