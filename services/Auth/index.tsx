export const setUser = (isLoggedIn: boolean) => {
  localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
};

export const getUser = () => {
  const user: string | null = localStorage.getItem("isLoggedIn");
  if (user) {
    return JSON.parse(user);
  }
  return false;
};
