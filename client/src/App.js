import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import SignUp from "./SignUp";

const App = () => {
  return (
    <Provider store={store}>
      <SignUp />
    </Provider>
  );
};

export default App;
