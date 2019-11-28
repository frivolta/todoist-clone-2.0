import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { IHeader } from '../../../interfaces';

import { IconBruger } from '../sidebar/IconBurger';
import { Button } from '../../button';

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    top: 0,
    height: 72,
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px 0 rgba(0,0,0,.1)',
    zIndex: 4,
    padding: '0 32px'
  },
  cursorPointer: {
    cursor: 'pointer'
  },
  burgerIcon: {
    cursor: 'pointer',
    position: 'relative'
  },
  button: {
    position: 'relative',
    marginLeft: 32
  }
});

export const Header: React.FC<IHeader> = props => {
  return (
    <Row className={css(styles.container)} vertical="center" horizontal="space-between">
      <Row vertical="center">
        <div onClick={() => console.log('clicked')} className={css(styles.burgerIcon)}>
          <IconBruger />
        </div>
        <div className={css(styles.button)}>
          <Button />
        </div>
      </Row>
    </Row>
  );
};
