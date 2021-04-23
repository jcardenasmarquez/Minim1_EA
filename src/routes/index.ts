import { Router } from "express";
import researchGroupRouter from "./researchGroupRoutes";

const router: Router = Router();

router.use("/groups", researchGroupRouter);

export default router;
