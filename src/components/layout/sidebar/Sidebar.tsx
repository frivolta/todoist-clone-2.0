import React, { useState, useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

import { Logo } from './Logo';
import { MenuItem } from './MenuItem';
import { ISidebar } from '../../../interfaces';
import { IconBruger } from './IconBurger';

const styles = StyleSheet.create({
  burgerIcon: {
    cursor: 'pointer',
    position: 'absolute',
    left: 24,
    top: 34
  },
  container: {
    backgroundColor: '#363740',
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
    height: '100%',
    minHeight: '100vh'
  },
  mainContainerMobile: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  mainContainerExpanded: {
    width: '100%',
    minWidth: '100vh'
  },
  menuItemList: {
    marginTop: 52
  },
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

  // Display Hamburger icon
  const renderBurger = () => {
    return (
      <div onClick={handleExpanded} className={css(styles.burgerIcon)}>
        <IconBruger />
      </div>
    );
  };

  const isMobile = width <= 768;

  // Toggle expanded sidebar
  const handleExpanded = () => setExpanded(!expanded);

  // Item is clicked
  const handleClickItem = (clickedValue: string) => {
    props.onChange(clickedValue);
    handleExpanded();
  };

  return (
    <div style={{ position: 'relative' }}>
      <Row
        className={css(styles.mainContainer)}
        breakpoints={{
          768: css(styles.mainContainerMobile, expanded && styles.mainContainerExpanded)
        }}
      >
        {isMobile && !expanded && renderBurger()}
        <Column
          className={css(styles.container)}
          breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}
        >
          <Logo />
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
        {isMobile && expanded && (
          <div className={css(styles.outsideLayer)} onClick={handleExpanded}></div>
        )}
      </Row>
    </div>
  );
};
