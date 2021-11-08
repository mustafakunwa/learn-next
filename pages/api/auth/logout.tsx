import { withSessionRoute } from "../../../lib/session";

export default withSessionRoute(logoutRoute);

async function logoutRoute(req: any, res: any) {
  req.session.destroy();
  res.json({ isLoggedIn: false });
}
