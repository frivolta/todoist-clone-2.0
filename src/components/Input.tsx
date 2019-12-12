import React from 'react';

interface IInput {
  small?: boolean;
  placeholder: string;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInput> = props => {
  return (
    <div className={`Input ${props.small && `Input--small`}`}>
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        className={`Input__field ${props.small && `Input__field--small`}`}
        placeholder={props.placeholder}
        onKeyPress={props.handleKeyPress}
      />
    </div>
  );
};
