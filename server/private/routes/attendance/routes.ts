import { listAllAttendance, updatePriorityAttendance, updateCpfAttendance, deleteAttendance} from "./action";

import * as express from "express";

export const router = express.Router();

router.get("/", listAllAttendance);
router.put("/:cpf", updateCpfAttendance);
router.put("/infos/:cpf", updatePriorityAttendance);
router.delete("/:cpf", deleteAttendance);



