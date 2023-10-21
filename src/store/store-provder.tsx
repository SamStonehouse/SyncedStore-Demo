import React, { useCallback, useMemo, useState } from 'react';
import { syncedStore, getYjsDoc } from '@syncedstore/core';
import type { MappedTypeDescription } from '@syncedstore/core/types/doc';

import { StoreContext, ToDoStore } from './store-context';
import { WebrtcProvider } from 'y-webrtc';

interface iProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: iProps) => {
  const [connected, setConnected] = useState(false);
  const [store] = useState<MappedTypeDescription<ToDoStore>>(syncedStore({ todos: [] }));

  const connect = useCallback((roomName: string, roomPassword: string) => {
    const doc = getYjsDoc(store);

    const provider = new WebrtcProvider(roomName, doc, {
      signaling: ['ws://localhost:4444'],
    });

    setConnected(true);
  }, []);

  const value = useMemo(
    () => ({
      connect,
      connected,
      store,
    }),
    [connect, connected, store]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
