import React from 'react';

import styles from './app.module.css';

import './app.css';
import './variables.css';
import StoreProvider from './store/store-provder';
import Main from './todo/main';

localStorage.log = 'true';

const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <StoreProvider>
        <Main />
      </StoreProvider>
    </div>
  );
};

export default App;
