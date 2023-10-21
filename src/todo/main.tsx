import React, { useContext } from 'react';
import { StoreContext } from '../store/store-context';
import ToDo from './todo';
import Connector from './connector';

const Main = (): JSX.Element => {
  const { connected } = useContext(StoreContext);

  if (connected) {
    return <ToDo />;
  }

  return <Connector />;
};

export default Main;
