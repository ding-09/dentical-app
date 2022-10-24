export const getList = () => {
  const list = JSON.parse(localStorage.getItem('list')) || {};
  return list;
};

export const addToStorage = (item) => {
  const list = JSON.parse(localStorage.getItem('list')) || {};
  list[item._id] = item;
  localStorage.setItem('list', JSON.stringify(list));
};
