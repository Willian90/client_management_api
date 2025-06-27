import express from "express";
import cors from "cors";
import morgan from "morgan";
import { configDotenv } from "dotenv";
import routerClient from "./routes/client.routes";
import routerAuth from "./routes/auth.routes";
import { authMiddleware } from "./helper/auth";
import swaggerUi from "swagger-ui-express";
import swaggerjson from "./swagger.json";

const app = express();
configDotenv();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(
  "/api/v1/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerjson)
);
app.use("/api/v1/auth", routerAuth);
app.use("/api/v1", authMiddleware, routerClient);
export default app;
