import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../redux/configureStore";

export const withProvider = (ui, { store = {}, ...renderOptions } = {}) => {
  const mockStore = createStore(rootReducer, store.getState?.());
  const Wrapper = ({ children }) => (
    <Provider store={mockStore}>{children}</Provider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
