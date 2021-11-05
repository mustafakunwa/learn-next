import { FC } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { setUser } from "../../services/Auth";
import { useRouter } from "next/router";
import Link from "next/link";
interface props {
  children?: React.ReactNode;
}

const MainLayout: FC<props> = ({ children }) => {
  const router = useRouter();
  const logout = () => {
    setUser(false);
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
          <Button color="inherit">
            <Link href="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link href="/shop">Shop</Link>
          </Button>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default MainLayout;
