import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Standard port is 3000 as requested
const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // 1. API: Contact Form Submission Endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, message, preferredTime } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields (name, email, message)" });
    }
    console.log("Contact submission received:", { name, email, phone, message, preferredTime });
    // Simulate successful save/alert
    return res.json({
      success: true,
      message: "Thank you for reaching out! Alex will contact you shortly.",
      receivedData: { name, email }
    });
  });

  // 2. API: Newsletter Subscription Endpoint
  app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }
    console.log("Newsletter subscription:", email);
    return res.json({
      success: true,
      message: "Subscribed successfully to the tech and leadership insights newsletter!"
    });
  });

  // 3. API: Visitor Insights Analytics
  let visitorCount = 142; // Seed count
  app.get("/api/analytics", (req, res) => {
    visitorCount += 1; // Increment on page visits info fetch
    res.json({
      visitors: visitorCount,
      interviewRequests: 18,
      completedAudits: 24,
      sysOpsUptime: "99.99%"
    });
  });

  // 4. API: AI-Powered Recruiter Chatbot Endpoint with lazy initialization
  app.post("/api/chatbot", async (req, res) => {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Graceful error propagation to prevent server crash
      return res.status(200).json({
        reply: "Hello! I am Alex's AI Assistant. Note: The Gemini API key is currently unconfigured in the system secrets, so I am running in simulated response mode. \n\nAlex Chen is a Computer Science graduate with expertise in IT Audit, Cyber Security, Database Administration, and Systems Administration. If you would like to ask questions details, make sure to add GEMINI_API_KEY as a secret!",
        simulated: true
      });
    }

    try {
      // Lazy import and execution of GoogleGenAI SDK to prevent load-time dependency crashes
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      // Construct systemic context for Alex Chen
      const candidateContext = `
You are the personal AI Career Assistant representing Alex Chen. Your goal is to convince recruiters of Alex's credibility, answer questions elegantly, highlight key performance metrics, and drive conversion to book an interview or schedule a call.
Be professional, structured, and confident, but humble and direct. Do not make up facts that contradict the context.

About Alex Chen:
- Undergrad: BS in Computer Science (Summa Cum Laude, GPA 3.92/4.0)
- Professional Expertise: IT Auditor, Cyber Security Practitioner, Database Administrator (DBA), Systems Administrator (SysAdmin).
- Focus areas: IT General Controls (ITGC), Sarbanes-Oxley (SOX) 404, Database optimization (SQL Server, Oracle, PostgreSQL), Enterprise Operating Systems (Linux, Windows Server), Cybersecurity risk management, and Business Intelligence (Power BI, Python).
- Personal Mission: "Bridging the gap between software development and corporate security governance by transforming operational data into business intelligence and fortified technical assets."

Key Accomplishments and Metrics:
- IT Audit: Conducted 24+ comprehensive IT Audits (ITGC, Application Controls, network configuration testing). Discovered & mitigated critical security vulnerabilities reducing organizational risk by 35%.
- DBA: Optimized SQL queries and structures for a legacy database, improving transaction latency by 45%. Implemented robust disaster recovery drills ensuring 99.99% high-availability.
- SysAdmin: Maintained 12 Linux & Windows servers with automated PowerShell and Bash scripting, reducing manual patch times by 70%.
- Research & Digital Transformation: Research on federated learning for privacy-preserving AI models, presented at a national symposium.

Guidelines for Chat Responses:
- Keep answers professional, concise, structured (using bullet points and bold headers when helpful).
- End responses with a high-converting CTA (e.g. "Would you like to see Alex's resume, view recent IT Audit reports, or schedule a quick 15-minute call?").
- Be concise. Speak directly as Alex's AI Representative.
- If asked about contact info, provide email (ayoengud@gmail.com) and mention the LinkedIn link in the portfolio.
`;

      const contents = [];
      
      // Inject prior conversation history if provided
      if (Array.isArray(history) && history.length > 0) {
        history.forEach((turn: any) => {
          contents.push({
            role: turn.role === "user" ? "user" : "model",
            parts: [{ text: turn.text }]
          });
        });
      }

      // Add actual message
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: candidateContext,
          temperature: 0.7,
        }
      });

      const reply = response.text || "I was unable to retrieve a response at this time. Please try asking a different question about Alex's technical highlights.";
      return res.json({ reply, simulated: false });

    } catch (err: any) {
      console.error("Gemini API call failed:", err);
      return res.json({
        reply: `Hello! I encountered an error communicating with Gemini, but I can tell you that Alex Chen is an excellent candidate specializing in IT Audit, Cyber Security, DBA, and SysAdmin. You can email Alex directly at ayoengud@gmail.com or review the structured sections in the portfolio!`,
        error: err.message
      });
    }
  });

  // 5. Setup Vite Middleware or Static Assets serving based on Environment
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode with static file delivery...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio custom server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
