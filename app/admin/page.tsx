"use client";

import { Provider } from "react-redux";
import { store } from "./store/adminStore";
import Admin from "./components/AddNewProduct";
import { useState } from "react";
import Container from "../components/Container";
import MyProducts from "./components/myProducts";

enum Tab {
  myProducts = "My products",
  newProduct = "New Product",
}

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.myProducts);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };
  const myProductsView = activeTab === Tab.myProducts;
  const newProductView = activeTab === Tab.newProduct;

  const tabsContent = (tab: Tab) => {
    switch (tab) {
      case Tab.myProducts:
        return <MyProducts />;
      case Tab.newProduct:
        return <Admin />;
    }
  };

  return (
    <Provider store={store}>
      <Container>
        <div className="my-8 flex justify-center gap-10">
          <h4
            onClick={() => handleTabChange(Tab.myProducts)}
            className={`px-2 text-xl ${
              myProductsView ? "border-b-2 border-red-400" : ""
            }`}
          >
            My Products
          </h4>
          <h4
            onClick={() => handleTabChange(Tab.newProduct)}
            className={`px-2 text-xl ${
              newProductView ? "border-b-2 border-red-400" : ""
            }`}
          >
            New Product
          </h4>
        </div>
        {tabsContent(activeTab)}
      </Container>
    </Provider>
  );
};
export default AdminPage;
