import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { IHeader } from '../../../interfaces';

const styles = StyleSheet.create({
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 14,
    border: '1px solid #DFE0EB'
  },
  container: {
    height: 40
  },
  cursorPointer: {
    cursor: 'pointer'
  },
  name: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '20px',
    textAlign: 'right',
    letterSpacing: 0.2,
    '@media (max-width: 768px)': {
      display: 'none'
    }
  },
  separator: {
    borderLeft: '1px solid #DFE0EB',
    marginLeft: 32,
    marginRight: 32,
    height: 32,
    width: 2,
    '@media (max-width: 768px)': {
      marginLeft: 12,
      marginRight: 12
    }
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '30px',
    letterSpacing: 0.3,
    '@media (max-width: 768px)': {
      marginLeft: 36
    },
    '@media (max-width: 468px)': {
      fontSize: 20
    }
  },
  iconStyles: {
    cursor: 'pointer',
    marginLeft: 25,
    '@media (max-width: 768px)': {
      marginLeft: 12
    }
  }
});

export const Header: React.FC<IHeader> = props => {
  const { title } = props;
  return (
    <Row className={css(styles.container)} vertical="center" horizontal="space-between">
      <span className={css(styles.title)}>{title}</span>
      <Row vertical="center">
        <div className={css(styles.separator)}></div>
        <Row vertical="center">
          <span className={css(styles.name, styles.cursorPointer)}>Filippo Rivolta</span>
          <img
            src="http://www.gravatar.com/avatar/3920d16a913f3c1eaf3ce218ebbee975?s=48&d=identicon"
            alt="avatar"
            className={css(styles.avatar, styles.cursorPointer)}
          />
        </Row>
      </Row>
    </Row>
  );
};
