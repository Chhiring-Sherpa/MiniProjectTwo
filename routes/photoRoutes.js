import express from "express";
import { createPhoto } from "../controllers/photoController.js";

const router = express.Router();

// CREATE
router.post("/", createPhoto);

export default router;
