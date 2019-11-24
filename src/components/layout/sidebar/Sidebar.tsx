import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

import { Logo } from './Logo';
import { MenuItem } from './MenuItem';
import { ISidebar } from '../../../interfaces';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#363740',
    width: 255,
    paddingTop: 32
  },
  menuItemList: {
    marginTop: 52
  },
  separator: {
    borderTop: '1px solid #DFE0EB',
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06
  }
});

//@ToDo: Should map items

export const Sidebar: React.FC<ISidebar> = props => {
  return (
    <Column className={css(styles.container)}>
      <Logo />
      <Column className={css(styles.menuItemList)}>
        <MenuItem
          title="Overview"
          handleClick={props.onChange}
          active={props.selectedItem === 'Overview'}
        />
        <div className={css(styles.separator)}></div>

        <MenuItem
          title="Projects"
          handleClick={props.onChange}
          active={props.selectedItem === 'Projects'}
        />
      </Column>
    </Column>
  );
};
