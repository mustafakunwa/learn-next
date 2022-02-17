import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { useEffect } from "react";
import PageLoader from "../components/PageLoader";

import "../styles/globals.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("136933411532939", undefined, {
          autoConfig: true,
          debug: true,
        }); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

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
