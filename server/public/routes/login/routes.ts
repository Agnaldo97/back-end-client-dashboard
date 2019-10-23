import { authenticate } from "./action";

import * as express from "express";

export const router = express.Router();

router.post("/", authenticate);
