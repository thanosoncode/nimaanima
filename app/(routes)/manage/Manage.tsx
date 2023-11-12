"use client";

import { Provider } from "react-redux";
import { store } from "./store/adminStore";
import AddNewProduct from "./addNewProduct/AddNewProduct";
import { useState } from "react";
import Container from "../../components/container/Container";
import MyProducts from "./myProducts/MyProducts";

enum Tab {
  myProducts = "My products",
  newProduct = "New Product",
}

const Manage = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.myProducts);

  const myProductsView = activeTab === Tab.myProducts;
  const newProductView = activeTab === Tab.newProduct;

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  const tabsContent = (tab: Tab) => {
    switch (tab) {
      case Tab.myProducts:
        return <MyProducts />;
      case Tab.newProduct:
        return <AddNewProduct />;
    }
  };

  return (
    <Provider store={store}>
      <Container classes="mt-8 mb-12 px-4">
        <div className="mb-8 flex justify-center gap-10">
          <button
            onClick={() => handleTabChange(Tab.myProducts)}
            className={`px-2 text-xl ${
              myProductsView ? "border-b-2 border-red-400" : ""
            }`}
          >
            My Products
          </button>
          <button
            onClick={() => handleTabChange(Tab.newProduct)}
            className={`px-2 text-xl ${
              newProductView ? "border-b-2 border-red-400" : ""
            }`}
          >
            New Product
          </button>
        </div>
        {tabsContent(activeTab)}
      </Container>
    </Provider>
  );
};
export default Manage;
