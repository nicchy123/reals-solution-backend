import { Router } from "express";
import { dataRouter } from "../modules/user/data.routes";

export const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: dataRouter,
  },

];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
