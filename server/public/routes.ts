import * as express from "express";
import { router as loginRoutes } from "./routes/login/routes";
import { router as patientRoutes } from "./routes/patient/routes";

export const router = express.Router();

router.use("/authenticate", loginRoutes);
router.use("/patient", patientRoutes);
router.get('/status', (req, res) => res.json({ status: "UP", status_code: 200 }))