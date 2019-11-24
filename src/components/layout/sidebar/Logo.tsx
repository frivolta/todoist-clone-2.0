import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    marginLeft: 32,
    marginRight: 32
  },
  title: {
    //fontFamily: 'Muli',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: '24px',
    letterSpacing: '0.4px',
    color: '#A4A6B3',
    opacity: 0.7,
    marginLeft: 12
  }
});

export const Logo: React.FC = () => {
  return (
    <Row className={css(styles.container)} horizontal="center" vertical="center">
      <img src="/images/logo.png" alt="Layout Logo" />
      <span className={css(styles.title)}>Todoist Clone</span>
    </Row>
  );
};
