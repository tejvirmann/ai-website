import express, { type Request, Response, NextFunction } from "express";

const app = express();

// Add error handling middleware at the top
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Express error:', err);
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Simple contact endpoint (without storage for now)
app.post("/api/contact", async (req, res) => {
  try {
    console.log("Contact form submitted:", req.body);
    res.status(201).json({ 
      message: "Contact inquiry submitted successfully",
      id: Date.now() 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ 
      message: "Internal server error" 
    });
  }
});

// Simple fallback for all other routes
app.use("*", (req, res) => {
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
      </body>
    </html>
  `);
});

// Export for Vercel
export default app;
