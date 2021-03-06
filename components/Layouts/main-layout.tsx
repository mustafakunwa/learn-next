import { FC, useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { setUser, getUser } from "../../services/Auth";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
interface props {
  children?: React.ReactNode;
}

const MainLayout: FC<props> = ({ children }) => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const res: any = await axios.get("/api/auth/user");
    const { isLoggedIn } = res.data;
    setIsLogged(isLoggedIn);
  };

  const logout = async () => {
    const res: any = await axios.get("/api/auth/logout");
    router.push("/registration/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }}>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
          </div>

          {isLogged ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => router.push("/registration/login")}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default MainLayout;
