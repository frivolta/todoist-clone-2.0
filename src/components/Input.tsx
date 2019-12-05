import React from 'react';

interface IInput {
  small?: boolean;
  placeholder: string;
}

export const Input: React.FC<IInput> = props => {
  return (
    <div className={`Input ${props.small && `Input--small`}`}>
      <input
        type="text"
        className={`Input__field ${props.small && `Input__field--small`}`}
        placeholder={props.placeholder}
      />
    </div>
  );
};
