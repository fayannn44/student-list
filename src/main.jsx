import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import studentReducer from "./studentSlice";
import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

function App() {
  return (
    <>
      <AddStudent />
      <ListStudent />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);