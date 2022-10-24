import { createContext, useContext, useState, useEffect } from 'react';
import { getList, addToStorage } from '../utils/list';

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [list, setList] = useState({});

  // get list from localStorage on component mount
  useEffect(() => {
    const data = getList();
    if (data) {
      setList(data);
    }
  }, []);

  const addToList = (item) => {
    const { _id, title, address } = item;

    // create new key/val pair
    const itemObj = { [_id]: { _id, title, address } };

    // check if there's duplication in list
    // if not, add item to list and localStorage
    if (!Object.hasOwn(list, _id)) {
      setList({ ...list, itemObj });
      addToStorage(item);
    }
  };

  const value = { list, addToList };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

const useList = () => {
  const context = useContext(ListContext);

  if (context === undefined) {
    throw new Error('useList must be used within ListProvider');
  }

  return context;
};

export { ListProvider, useList };
