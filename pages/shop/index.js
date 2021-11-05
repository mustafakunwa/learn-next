import { useEffect } from "react";
import MainLayout from "../../components/Layouts/main-layout";

const Shop = () => {
  useEffect(() => {
    console.log("shop");
  }, []);
  console.log("shop out");
  return (
    <div
      style={{
        padding: 100,
        height: "100vh",
        width: "100%",
        background: "orange",
      }}
    >
      <h1>Shop</h1>
    </div>
  );
};

Shop.layout = MainLayout;

export default Shop;
