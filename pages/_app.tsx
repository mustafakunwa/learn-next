import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";

import PageLoader from "../components/PageLoader";

import "../styles/globals.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <PageLoader />
      <AnimatePresence exitBeforeEnter>
        {getLayout(<Component {...pageProps} key={router.route} />)}
      </AnimatePresence>
    </>
  );
};

export default MyApp;
