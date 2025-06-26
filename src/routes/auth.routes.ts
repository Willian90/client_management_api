import { Router } from "express";
import authController from "../controller/auth.controller";

const routerAuth = Router();

// Aquí corregido:
routerAuth.post("/register", authController.register);
routerAuth.post("/login", authController.login);

export default routerAuth;
