CREATE TABLE IF NOT EXISTS users (
    uid INTEGER
)

CREATE TABLE IF NOT EXISTS sessions (
    session_id TEXT PRIMARY KEY,
    uid TEXT REFERENCES users(uid) ON DELETE CASCADE,
    ip_address TEXT,
    session_start INTEGER
    timespent INTEGER,
    user_agent TEXT,
    events TEXT
);