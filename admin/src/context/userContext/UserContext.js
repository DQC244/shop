import { createContext, useReducer } from "react";

import UserReducer from "./UserReducer";

const init_state = {
  users: [],
  isFetching: false,
  error: false,
};
export const UserContext = createContext(init_state);
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, init_state);
  return (
    <UserContext.Provider
      value={{
        users: state.users,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
