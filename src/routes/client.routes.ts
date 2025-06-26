import { Router } from "express";
import clientController from "../controller/client.controller";

const router = Router();

router.get("/client", clientController.getAll);
router.get("/client/:id", clientController.getById);
router.post("/client", clientController.create);
router.put("/client/:id", clientController.update);
router.delete("/client/:id", clientController.delete);
router.get("/client/:id/status", clientController.changeStatus);

export default router;
