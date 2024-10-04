CREATE TABLE IF NOT EXISTS users (
    uid INTEGER,
    first_visit TEXT,
    visit_count,
);

CREATE TABLE IF NOT EXISTS sessions (
    visit_id INTEGER
    visit_count INTEGER
    session_id TEXT PRIMARY KEY,
    uid TEXT REFERENCES users(uid) ON DELETE CASCADE,
    device TEXT
    ip_address TEXT,
    session_start INTEGER
    timespent INTEGER,
    user_agent TEXT,
    ); 

CREATE TABLE IF NOT EXISTS events (
    event_id INTEGER
    uid INTEGER REFERENCES users(uid) ON DELETE CASCADE,
    session_id INTEGER REFERENCES sessions(session_id) ON DELETE CASCADE,
    event_type TEXT,
    page_url,
    event_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metadata TEXT
);