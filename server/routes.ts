import { Router } from "express";

import { router as publicRoutes } from "./public/routes";
import { router as privateRoutes } from "./private/routes";
export const router = Router();

router.use("/public", publicRoutes);
router.use("/private", privateRoutes);

