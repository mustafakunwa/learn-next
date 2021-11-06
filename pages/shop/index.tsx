import MainLayout from "../../components/Layouts/main-layout";
import authenticatedRoute from "../../HOC/auth";
import MotionTransition from "../../components/MotionTransition";

const Shop = () => {
  return (
    <MotionTransition>
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
    </MotionTransition>
  );
};

Shop.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default authenticatedRoute(Shop);
