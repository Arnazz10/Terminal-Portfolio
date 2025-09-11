import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "../../shared/src/schema";
import { z } from "zod";

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const key = ip;
  const record = rateLimitStore.get(key);
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  record.count++;
  return true;
}

setInterval(() => {
  const now = Date.now();
  const keysToDelete: string[] = [];
  rateLimitStore.forEach((record, key) => {
    if (now > record.resetTime) {
      keysToDelete.push(key);
    }
  });
  keysToDelete.forEach(key => rateLimitStore.delete(key));
}, 60 * 1000);

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const clientIp = (req as any).ip || (req as any).connection?.remoteAddress || 'unknown';
      if (!checkRateLimit(clientIp)) {
        return res.status(429).json({
          success: false,
          message: "Too many requests. Please try again later."
        });
      }
      const validatedData = insertContactMessageSchema.parse(req.body);
      await storage.createContactMessage(validatedData as any);
      res.json({ 
        success: true, 
        message: "Message sent successfully!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your input and try again.",
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Unable to send message. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}


