import express from "express";
import { ncmNbsCclasstribController } from "../controller/ncmNbsCclasstribController.js";

const router = express.Router();

// GET /ncmNbsCclasstrib/ - retorna o JSON de classificação tributária NCM/NBS via controller
router.get("/", (req, res) => ncmNbsCclasstribController.getAll(req, res));

export default router;
