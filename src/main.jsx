import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";

import studentReducer from "./studentSlice";
import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

function App() {
  const [editData, setEditData] = useState(null);

  return (
    <div className="container">
      <AddStudent
        editData={editData}
        setEditData={setEditData}
      />
      <ListStudent setEditData={setEditData} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);