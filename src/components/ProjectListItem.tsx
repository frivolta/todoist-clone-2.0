import React from 'react';

export const ProjectListItem: React.FC = props => (
  <div className="ProjectList__item">
    <span
      className="ProjectList__item__label ProjectList__item__label--active"
      role="button"
      onClick={() => console.log('item clicked')}
    >
      Grocery store
    </span>
    <span
      className="ProjectList__item__button ProjectList__item__button--active"
      role="button"
      onClick={() => console.log('item deleted')}
    >
      <img src="/images/delete.svg" alt="delete button" />
    </span>
  </div>
);
