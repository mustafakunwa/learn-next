import React from "react";
import Router from "next/router";
import { getUser } from "../services/Auth";

const authenticatedRoute = (Component: any = null, options: any = {}) => {
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

      const Layout = Component.layout || EmptyLayout;
      return (
        <Layout>
          <Component {...this.props} />
        </Layout>
      );
    }
  }

  return AuthenticatedRoute;
};

const EmptyLayout = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>;
};

export default authenticatedRoute;
