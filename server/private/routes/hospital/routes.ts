import { listAllHospital} from "./action";

import * as express from "express";

export const router = express.Router();

router.get("/", listAllHospital);

