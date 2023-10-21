import React, { useContext } from 'react';
import { useSyncedStore } from '@syncedstore/react';
import { StoreContext } from '../store/store-context';

const ToDo = (): JSX.Element => {
  const { store } = useContext(StoreContext);
  const state = useSyncedStore(store);

  return (
    <div>
      <p>Todo items:</p>
      <ul>
        {state.todos.map((todo, i) => {
          return (
            <li key={i} style={{ textDecoration: todo.done ? 'line-through' : '' }}>
              <label>
                <input type="checkbox" checked={todo.done} onClick={() => (todo.done = !todo.done)} />
                {todo.name}
              </label>
            </li>
          );
        })}
      </ul>
      <input
        placeholder="Enter a todo item and hit enter"
        type="text"
        onKeyPress={event => {
          if (event.key === 'Enter') {
            const target = event.target as HTMLInputElement;
            // Add a todo item using the text added in the textfield
            state.todos.push({ done: false, name: target.value });
            target.value = '';
          }
        }}
        style={{ width: '200px', maxWidth: '100%' }}
      />
    </div>
  );
};

export default ToDo;
