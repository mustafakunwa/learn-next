import MainLayout from "../components/Layouts/main-layout";
import MotionTransition from "../components/MotionTransition";
const Home = () => {
  return (
    <MotionTransition>
      <div
        style={{
          padding: 100,
          height: "100vh",
          width: "100",
          background: "green",
        }}
      >
        <h1>Home</h1>
      </div>
    </MotionTransition>
  );
};

Home.layout = MainLayout;

export default Home;
