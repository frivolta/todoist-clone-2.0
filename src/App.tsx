import React, { useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

import { Sidebar } from './components/layout/sidebar/Sidebar';
import { Header } from './components/layout/header/Header';
import { IApp } from './interfaces';

const styles = StyleSheet.create({
  container: {
    height: '100vh'
  },
  content: {
    marginTop: 54
  },
  mainBlock: {
    backgroundColor: '#F7F8FC',
    padding: 30
  }
});

//@Todo: Should be a custom hooks, handled with context
//@Todo: Responsive version
//@Todo: Using custom font
//@Todo: Testing
//@Todo: Storybook
//@Todo: PWA version

export const App: React.FC<IApp> = () => {
  const [selectedItem, setSelectedItem] = useState('Projects');

  const handleSelectedItem = (newItem: string) => setSelectedItem(newItem);

  return (
    <Row className={css(styles.container)}>
      <Sidebar selectedItem={selectedItem} onChange={handleSelectedItem} />
      <Column flexGrow={1} className={css(styles.mainBlock)}>
        <Header title={selectedItem} />
        <div className={css(styles.content)}>
          <span>Content</span>
        </div>
      </Column>
    </Row>
  );
};
