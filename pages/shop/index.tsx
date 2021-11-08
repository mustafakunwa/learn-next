import MainLayout from "../../components/Layouts/main-layout";
import authenticatedRoute from "../../HOC/auth";
import MotionTransition from "../../components/MotionTransition";
import { withSessionSsr } from "../../lib/session";
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
export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }: any) {
    const user = req.session.user;

    if (user?.isLoggedIn !== true) {
      return {
        redirect: {
          destination: "/registration/login",
          permanent: false,
        },
      };
    }

    return {
      props: {
        isLoggedIn: user?.isLoggedIn || false,
      },
    };
  }
);

export default Shop;
