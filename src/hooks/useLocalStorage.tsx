import { useState, useEffect } from "react";

export function useLocalStorage(key: string, intelValue: object | []) {
  const [localStorageState, setLocalStorageState] = useState({});
  const getLocalStorage = () => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  const setLocalStorage = (value: object | []) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalStorageState(value);
  };

  useEffect(() => {
    const localStorageItem = getLocalStorage();
    if (!localStorageItem) setLocalStorage(intelValue);
    if (localStorageItem) setLocalStorageState(localStorageItem);
  }, []);

  return [localStorageState, setLocalStorage];
}
