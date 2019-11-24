import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { IMenuItem } from '../../../interfaces';
import { IconComponent } from './Icon';

const styles = StyleSheet.create({
  activeBar: {
    height: 56,
    width: 3,
    backgroundColor: '#DDE2FF',
    position: 'absolute',
    left: 0
  },
  activeContainer: {
    backgroundColor: 'rgba(221,226,255, 0.08)'
  },
  activeTitle: {
    color: '#DDE2FF'
  },
  container: {
    height: 56,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(221,226,255, 0.08)'
    },
    paddingLeft: 32,
    paddingRight: 32
  },
  title: {
    fontFamily: 'Muli',
    fontSize: 16,
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: '#A4A6B3',
    marginLeft: 24
  }
});
export const MenuItem: React.FC<IMenuItem> = props => {
  return (
    <span className="clickable" role="button" onClick={() => props.handleClick(props.title)}>
      <Row
        className={css(styles.container, props.active && styles.activeContainer)}
        vertical="center"
        role="button"
      >
        {props.active && <div className={css(styles.activeBar)}></div>}
        <IconComponent fill={props.active && '#DDE2FF'} opacity={!props.active && '0.4'} />
        <span className={css(styles.title, props.active && styles.activeTitle)}>{props.title}</span>
      </Row>
    </span>
  );
};

MenuItem.defaultProps = {
  title: 'None'
};
