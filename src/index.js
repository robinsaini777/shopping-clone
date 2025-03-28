
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // ✅ Redux Provider import
import store from "./redux/store"; // ✅ Store import
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> {/* ✅ Wrap App with Provider */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
