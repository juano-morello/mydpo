import passport from "passport";
import handler from "../../../../server/api-route";

export default handler()
  .use(passport.authenticate("magiclogin"))
    // @ts-ignore
  .use((req, res) => {
    res.redirect(req.user?.redirect || "/app");
  });
