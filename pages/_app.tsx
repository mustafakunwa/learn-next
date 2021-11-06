import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.scss";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    layout?: React.ComponentType;
  };
};

const MyApp = ({ Component, pageProps, router }: ComponentWithPageLayout) => {
  const Layout = Component.layout || EmptyLayout;
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
};

const EmptyLayout = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>;
};

export default MyApp;
