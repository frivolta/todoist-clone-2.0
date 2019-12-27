import React from 'react';

export type LinearLoaderProps = {
  height?: string;
  backgroundColor?: string;
  color?: string;
};
export const LinearLoader: React.FC<LinearLoaderProps> = props => {
  const { height, backgroundColor, color } = props;

  return (
    <div className="LinearLoader__container" style={{ height: height, backgroundColor }}>
      <div className="LinearLoader__continues" style={{ backgroundColor: color }} />
    </div>
  );
};

LinearLoader.defaultProps = {
  height: '5px'
};

export default LinearLoader;
