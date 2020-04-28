import React, { createContext } from 'react';
import { UseLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: 1, task: 'Turn off alarm', completed: false },
  { id: 2, task: 'Go back to sleep', completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = UseLocalStorageReducer(
    'todos',
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
