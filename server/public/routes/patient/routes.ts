import { findPatient } from "./action";

import * as express from "express";

export const router = express.Router();

router.get("/:cpf", findPatient);
