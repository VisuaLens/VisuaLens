import { Database } from "bun:sqlite";
import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { BunFile } from "bun";
import { getUId } from "./utils/get";
import moment from "moment-timezone";

// Variables
const dbpath = path.join(__dirname, "database", "main.db");
const db = new Database(dbpath);
const app = express();
const time = moment().tz("Europe/Berlin").format("YYYY-MM-DD HH:mm:ss");

// Init Config
dotenv.config();
app.use(express.json());
app.use(cors());

// Initialize database
const initQuery = `
CREATE TABLE IF NOT EXISTS users (
    user_id TEXT PRIMARY KEY,
    first_visit TIMESTAMP,
    visit_count INTEGER DEFAULT 0,
    attributes TEXT
);
CREATE TABLE IF NOT EXISTS sessions (
    visit_id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_count INTEGER DEFAULT 0,
    session_id TEXT UNIQUE,
    user_id TEXT REFERENCES users(user_id) ON DELETE CASCADE,
    useragent TEXT,
    ipadress TEXT,
    device_type TEXT,
    operating_system TEXT,
    browser TEXT,
    location TEXT,
    session_start TIMESTAMP,
    timespent INTEGER
);
CREATE TABLE IF NOT EXISTS events (
    event_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT REFERENCES users(user_id) ON DELETE CASCADE,
    session_id TEXT REFERENCES sessions(session_id) ON DELETE CASCADE,
    event_type TEXT,
    page_url TEXT,
    event_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    actions TEXT,
    event_count INTEGER DEFAULT 0,
    metadata TEXT
);
`;

db.exec(initQuery);

// APIs
app.post("/api/event/Wevent", (req, res) => {
    console.log("Event API accessed");
    res.status(200).send();
});

app.post("/api/visits/Wvisit", async (req, res) => {
    console.log("Visit API accessed");
    res.status(200).send();
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "test", "index.html"));
});

app.post("/api/event/button", (req: any, res: any) => {
    console.log("Button event received");
    res.status(200).send();
});

app.get("/api/local/nuid", (req, res) => {
    const uid = getUId();
    res.json({ uid: uid });
});

app.post("/api/local/sudi", (req, res) => {
    console.log("Received UID from client:", req.body.uid);
    const uid = req.body.uid;

    try {
        db.transaction(() => {
            // Check if user exists
            let user = db.query('SELECT user_id FROM users WHERE user_id = ?').get(uid) as { user_id: string } | null;
            
            if (!user) {
                // Create new user
                db.run('INSERT INTO users (user_id, first_visit) VALUES (?, ?)', [uid, time]);
            }
            
            // Increment visit count
            db.run('UPDATE users SET visit_count = visit_count + 1 WHERE user_id = ?', [uid]);

            // Create new session
            const sessionId = getUId();
            db.run('INSERT INTO sessions (session_id, user_id, session_start) VALUES (?, ?, ?)', [sessionId, uid, time]);

            // Create initial event
            db.run('INSERT INTO events (session_id, user_id, event_type) VALUES (?, ?, ?)', [sessionId, uid, 'session_start']);

            res.status(200).json({ userId: uid, sessionId: sessionId });
        })();
    } catch (error) {
        console.error('Query failed:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Server Start
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Close database on app termination
process.on('SIGINT', () => {
    db.close();
    process.exit(0);
});