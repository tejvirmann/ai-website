import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";   // <-- Added this import

// Polyfill for __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inline storage implementation
interface ContactInquiry {
  id: number;
  fullName: string;
  email: string;
  businessName: string;
  phoneNumber: string | null;
  industry: string | null;
  businessChallenge: string;
  preferredContactMethod: string | null;
  createdAt: Date;   // <-- Add this line
}

class SimpleStorage {
  private contactInquiries: Map<number, ContactInquiry> = new Map();
  private currentId: number = 1;

  async createContactInquiry(data: {
    fullName: string;
    email: string;
    businessName: string;
    phoneNumber?: string | null;
    industry?: string | null;
    businessChallenge: string;
    preferredContactMethod?: string | null;
  }): Promise<ContactInquiry> {
    const id = this.currentId++;
    const inquiry: ContactInquiry = {
      id,
      fullName: data.fullName,
      email: data.email,
      businessName: data.businessName,
      phoneNumber: data.phoneNumber || null,
      industry: data.industry || null,
      businessChallenge: data.businessChallenge,
      preferredContactMethod: data.preferredContactMethod || null,
      createdAt: new Date()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }
}

const storage = new SimpleStorage();

const app = express();

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Express error:', err);
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/contact", async (req, res) => {
  try {
    console.log("Contact form submitted:", req.body);

    const { fullName, email, businessName, businessChallenge } = req.body;
    if (!fullName || !email || !businessName || !businessChallenge) {
      return res.status(400).json({
        message: "Missing required fields"
      });
    }

    const inquiry = await storage.createContactInquiry({
      fullName,
      email,
      businessName,
      businessChallenge,
      phoneNumber: req.body.phoneNumber || null,
      industry: req.body.industry || null,
      preferredContactMethod: req.body.preferredContactMethod || null
    });

    res.status(201).json({
      message: "Contact inquiry submitted successfully",
      id: inquiry.id
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const inquiries = await storage.getContactInquiries();
    res.json(inquiries);
  } catch (error) {
    console.error("Get inquiries error:", error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
});

const distPath = path.resolve(__dirname, "..", "dist", "public");

if (fs.existsSync(distPath)) {
  console.log(`Serving static files from: ${distPath}`);
  app.use(express.static(distPath));

  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api")) {
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send("Frontend not built");
      }
    }
  });
} else {
  console.warn(`Static files not found at: ${distPath}`);

  app.use("*", (req, res) => {
    if (!req.path.startsWith("/api")) {
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>MadisonAI Solutions</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <h1>MadisonAI Solutions</h1>
            <p>Server is running! Check /api/health for status.</p>
            <p>Contact form endpoint: /api/contact</p>
            <p>Frontend is being built...</p>
          </body>
        </html>
      `);
    }
  });
}

export default app;

// --- Start server if this file is executed directly ---
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
