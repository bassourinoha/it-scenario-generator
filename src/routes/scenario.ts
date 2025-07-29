import express from "express";
import { generateScenario } from "../utils/generator";

const router = express.Router();

router.post("/", (req, res) => {
  const { technology, role, environment } = req.body;

  if (!technology || !role || !environment) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const result = generateScenario({ technology, role, environment });
  res.json(result);
});

export default router;
