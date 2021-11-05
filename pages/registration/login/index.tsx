import { useEffect } from "react";
import { setUser, getUser } from "../../../services/Auth";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    if (getUser()) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <button
      onClick={() => {
        setUser(true);
        router.push("/");
      }}
    >
      Login
    </button>
  );
};

export default Login;
