import { Provider } from "react-redux";
import AppRouter from "./components/AppRouter/AppRouter";
import store from "./store/store";
import AppContext from "./components/AppContext/AppContext";

const App = () => {
  return (
    <Provider store={store}>
      <AppContext>
        <AppRouter />
      </AppContext>
    </Provider>
  );
};

export default App;
