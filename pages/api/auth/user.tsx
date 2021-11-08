import { withSessionRoute } from "../../../lib/session";

export default withSessionRoute(userRoute);

async function userRoute(req: any, res: any) {
  if (req.session.user) {
    res.json({
      ...req.session.user,
      isLoggedIn: true,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
}
