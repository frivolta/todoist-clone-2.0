import React from 'react';

//@ToDo: Should map items

export const Sidebar: React.FC = props => {
  return (
    <div className="Sidebar Sidebar--open">
      <ul className="Menu">
        <li className="Menu__item">
          <a className="Menu__item__link" href="/">
            Inbox
          </a>
        </li>
        <li className="Menu__item">
          <a className="Menu__item__link" href="/">
            Next 7 days
          </a>
        </li>
        <li className="Menu__item">
          <a className="Menu__item__link" href="/">
            Today
          </a>
        </li>
      </ul>

      <hr />

      <span className="Title Title--secondary">My list</span>
      <div className="ProjectList">
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
        <div className="ProjectList__item">
          <span
            className="ProjectList__item__label"
            role="button"
            onClick={() => console.log('item clicked')}
          >
            Christmas gifts
          </span>
          <span
            className="ProjectList__item__button"
            role="button"
            onClick={() => console.log('item deleted')}
          >
            <img src="/images/delete.svg" alt="delete button" />
          </span>
        </div>
        <div className="ProjectList__item">
          <span
            className="ProjectList__item__label"
            role="button"
            onClick={() => console.log('item clicked')}
          >
            My favourite places
          </span>
          <span
            className="ProjectList__item__button"
            role="button"
            onClick={() => console.log('item deleted')}
          >
            <img src="/images/delete.svg" alt="delete button" />
          </span>
        </div>
      </div>
    </div>
  );
};
