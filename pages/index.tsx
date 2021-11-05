import MainLayout from "../components/Layouts/main-layout";

const Home = () => {
  return (
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
  );
};

Home.layout = MainLayout;

export default Home;
