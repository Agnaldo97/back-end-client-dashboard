import * as express from "express";
import { router as userRoutes } from "./routes/user/routes";
import { router as hospitalRoutes } from "./routes/hospital/routes";
import { router as attendanceRoutes } from "./routes/attendance/routes";
// import { decodeToken } from "../middleware/auth-service";

export const router = express.Router();

// router.use(decodeToken);
router.use("/user", userRoutes);
router.use("/hospital", hospitalRoutes);
router.use("/attendance", attendanceRoutes);
