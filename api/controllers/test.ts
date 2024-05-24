import { Request, Response } from "express";

// Test controller
export const getTestMessage = (_: Request, res: Response) => {
  res.json({ message: "Test endpoint is working!" });
};
