// localStorage functions
export const getUser = () => {
  let user = JSON.parse(localStorage.getItem('user')) || null;
  return user;
};

export const signInUser = (name, token) => {
  let user = { name, token };
  localStorage.setItem('user', JSON.stringify(user));
};

export const signOutUser = () => {
  localStorage.removeItem('user')
};
