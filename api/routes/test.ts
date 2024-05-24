import express from "express";
import { getTestMessage } from "../controllers/test";

const router = express.Router();

// Test route
export default router.get("/", getTestMessage);
