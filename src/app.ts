import { Database } from "bun:sqlite";
import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { BunFile } from "bun";
import { getUId } from "./utils/get";
const moment = require("moment-timezone");
const sqlite = require("sqlite3").verbose();

// Queries

// Variables
const dbpath = path.join(__dirname, "database", "main.db");
const db = new Database(dbpath);
const app = express();
const time = moment().tz("Europe/Berlin").format("YYYY-MM-DD HH:mm:ss");
const visitData = path.join(__dirname, "data/visits.json");

// Queries
const initquery = db.query(
  `
            CREATE TABLE IF NOT EXISTS users (
        uid INTEGER PRIMARY KEY,
        first_visit TEXT,
        visit_count INTEGER
    );

    CREATE TABLE IF NOT EXISTS sessions (
        visit_id INTEGER PRIMARY KEY,
        visit_count INTEGER,
        session_id TEXT UNIQUE,
        uid INTEGER REFERENCES users(uid) ON DELETE CASCADE,
        device TEXT,
        ip_address TEXT,
        session_start INTEGER,
        timespent INTEGER,
        user_agent TEXT
    );

    CREATE TABLE IF NOT EXISTS events (
        event_id INTEGER PRIMARY KEY,
        uid INTEGER REFERENCES users(uid) ON DELETE CASCADE,
        session_id TEXT REFERENCES sessions(session_id) ON DELETE CASCADE,
        event_type TEXT,
        page_url TEXT,
        event_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        metadata TEXT
    );

`);

// Exports
export { app };

// Init Config
dotenv.config();
app.use(express.json());
app.use(cors());
initquery.get();

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
  console.log();
  res.status(200).send();
});

app.get("/api/local/nudi", (req, res) => {
  const uid = getUId();
  res.json({ uid: uid });
});

app.post("/api/local/sudi", (req, res) => {
  console.log("Received UID from client:", req.body);
  res.status(200).send();
});

// Server Start
db.close();
app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

// Function to run the SQL initialization
