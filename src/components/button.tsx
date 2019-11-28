import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    background: '#007AFF',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    cursor: 'pointer',
    color: '#ffffff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button__text: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: 700,
    marginTop: 1
  },
  button__icon: {
    marginRight: 10,
    lineHeight: 0
  }
});

export const Button: React.FC = () => (
  <button className={css(styles.button)}>
    <img src="/images/icon-plus.svg" alt="button icon" className={css(styles.button__icon)} />
    <span className={css(styles.button__text)}>New Task</span>
  </button>
);
