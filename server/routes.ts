import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);

      // Send email notification
      if (resend) {
        try {
          await resend.emails.send({
            from: 'Omnisbay Waitlist <onboarding@resend.dev>',
            to: 'waitlist@omnisbay.com',
            subject: 'New Waitlist Signup',
            html: `
              <h1>New Lead Signup</h1>
              <p><strong>Name:</strong> ${lead.name}</p>
              <p><strong>Email:</strong> ${lead.email}</p>
              <p><strong>Type:</strong> ${lead.type}</p>
            `
          });
        } catch (emailErr) {
          console.error("Failed to send email notification:", emailErr);
        }
      } else {
        console.warn("RESEND_API_KEY not found, skipping email notification");
      }

      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  return httpServer;
}
