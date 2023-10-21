import type { MappedTypeDescription } from '@syncedstore/core/types/doc';
import { createContext } from 'react';

// (optional, define types for TypeScript)
export type ToDo = { done: boolean; name: string };
export type ToDoStore = { todos: ToDo[] };

type StoreContextType = {
  store: MappedTypeDescription<ToDoStore>;
  connect: (roomName: string, roomPassword: string) => void;
  connected: boolean;
};

export const StoreContext = createContext<StoreContextType>({} as StoreContextType);
