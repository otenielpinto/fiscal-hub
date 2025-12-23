import express from "express";
import { classTribController } from "../controller/classTribController.js";

const router = express.Router();

// GET /classTrib/ - retorna o JSON de classificação tributária via controller (dados reais)
router.get("/", (req, res) => classTribController.getAll(req, res));

export default router;
