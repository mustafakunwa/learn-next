import { withSessionRoute } from "../../../lib/session";

export default withSessionRoute(loginRoute);

async function loginRoute(req: any, res: any) {
  const user = {
    isLoggedIn: true,
  };
  req.session.user = user;
  await req.session.save();
  res.json(user);
}
