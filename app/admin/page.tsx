"use client";

import { Provider } from "react-redux";
import { store } from "./store/adminStore";
import Admin from "./Admin";

const AdminPage = () => {
  return (
    <Provider store={store}>
      <Admin />
    </Provider>
  );
};
export default AdminPage;
