import React from 'react';
import { Display } from '../../Display';
import { Card } from '../../Card';

export const Content: React.FC = () => (
  <div className="Content">
    <div className="Content__main">
      <Display />
      <Card />
    </div>
  </div>
);
