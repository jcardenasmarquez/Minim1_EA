import { Router } from "express";
import researchGroupController from "../controllers/researchGroupController";

const router: Router = Router();

router.get("/", researchGroupController.getResearcGroups);
router.get("/:groupid", researchGroupController.getResearchGroup);

router.post("/new", researchGroupController.addResearchGroup);

router.put("/:groupid", researchGroupController.editResearchGroup);

export default router;
