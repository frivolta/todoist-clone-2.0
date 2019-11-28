import React, { useState, useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

import { Logo } from './Logo';
import { MenuItem } from './MenuItem';
import { ISidebar } from '../../../interfaces';
import { IconBruger } from './IconBurger';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: 255,
    paddingTop: 32,
    height: 'calc(100% - 32px)'
  },
  containerMobile: {
    transition: 'left 0.5s, right 0.5s',
    position: 'absolute',
    width: 255,
    height: 'calc(100% - 32px)',
    zIndex: 901
  },
  mainContainer: {
    left: 0,
    top: 72,
    bottom: 0,
    width: 260,
    position: 'fixed',
    flex: '0 0 260px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
    color: '#898989',
    zIndex: 3
  },
  mainContainerMobile: {},
  mainContainerExpanded: {},
  menuItemList: {},
  outsideLayer: {
    position: 'absolute',
    width: '100vw',
    minWidth: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.50)',
    zIndex: 900
  },
  separator: {
    borderTop: '1px solid #DFE0EB',
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06
  },
  hide: {
    left: -255
  },
  show: {
    left: 0
  }
});

//@ToDo: Should map items

export const Sidebar: React.FC<ISidebar> = props => {
  const [expanded, setExpanded] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  // Check width
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  const isMobile = width <= 768;

  // Toggle expanded sidebar
  const handleExpanded = () => setExpanded(!expanded);

  // Item is clicked
  const handleClickItem = (clickedValue: string) => {
    props.onChange(clickedValue);
    handleExpanded();
  };

  return (
    <Row
      className={css(styles.mainContainer)}
      breakpoints={{
        768: css(styles.mainContainerMobile, expanded && styles.mainContainerExpanded)
      }}
    >
      <Column
        className={css(styles.container)}
        breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}
      >
        <Column className={css(styles.menuItemList)}>
          <MenuItem
            title="Overview"
            handleClick={() => handleClickItem('Overview')}
            active={props.selectedItem === 'Overview'}
          />
          <div className={css(styles.separator)}></div>

          <MenuItem
            title="Projects"
            handleClick={() => handleClickItem('Projects')}
            active={props.selectedItem === 'Projects'}
          />
        </Column>
      </Column>
    </Row>
  );
};
