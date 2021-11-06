import React from "react";
import Router from "next/router";
import { getUser } from "../services/Auth";
import type { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type options = {
  pathAfterFailure?: string;
};
const authenticatedRoute = (
  Component: NextPageWithLayout,
  options: options = {}
) => {
  class AuthenticatedRoute extends React.Component {
    state = {
      loading: true,
    };

    async componentDidMount() {
      const isLoggedIn = getUser();

      if (isLoggedIn) {
        this.setState({ loading: false });
      } else {
        Router.push(options.pathAfterFailure || "/registration/login");
      }
    }

    render() {
      const { loading } = this.state;

      if (loading) {
        return <div>loading</div>;
      }

      const getLayout = Component.getLayout ?? ((page) => page);
      return getLayout(<Component {...this.props} />);
    }
  }

  return AuthenticatedRoute;
};

export default authenticatedRoute;
