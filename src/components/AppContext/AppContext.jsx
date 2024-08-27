import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const Context = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(Context);
const AppContext = ({ children }) => {
  const [appTitle, setAppTitle] = useState("");
  return (
    <Context.Provider value={{ appTitle, setAppTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node,
};

export default AppContext;
