import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize the app
(async () => {
  try {
    const server = await registerRoutes(app);
    
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
          </body>
        </html>
      `);
    });

    // For Vercel, we export the app instead of listening
    if (process.env.NODE_ENV !== "production" || process.env.VERCEL !== "1") {
      const port = process.env.PORT || 3000;
      server.listen({
        port,
        host: "0.0.0.0",
        reusePort: true,
      }, () => {
        console.log(`serving on port ${port}`);
      });
    }
  } catch (error) {
    console.error('Failed to initialize app:', error);
    throw error;
  }
})();

// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Express error:', err);
  res.status(500).json({ message: "Internal Server Error" });
});

// Export for Vercel
export default app;
