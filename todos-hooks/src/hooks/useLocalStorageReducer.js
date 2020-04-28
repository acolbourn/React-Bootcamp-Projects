import { useReducer, useEffect } from 'react';

function UseLocalStorageReducer(key, defaultVal, reducer) {
  // make piece of state, based off of value in localstorage (or default)
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export { UseLocalStorageReducer };
