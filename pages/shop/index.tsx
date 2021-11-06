import MainLayout from "../../components/Layouts/main-layout";
import authenticatedRoute from "../../HOC/auth";

const Shop = () => {
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

export default authenticatedRoute(Shop);
