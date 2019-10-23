import { newUser, listAllUsers, deleteUser, verifyEmail} from "./action";

import * as express from "express";

export const router = express.Router();

router.post("/", newUser);
router.get("/", listAllUsers);
router.get("/:email", verifyEmail);
router.delete("/:idUser", deleteUser);

