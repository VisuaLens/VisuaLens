CREATE TABLE IF NOT EXISTS users (
    user_id TEXT PRIMARY KEY,
    first_visit TIMESTAMP,
    visit_count INTEGER AUTO_INCREMENT,
    attributes TEXT
);

CREATE TABLE IF NOT EXISTS sessions (
    visit_id INTEGER,
    session_count INTEGER AUTO_INCREMENT,
    session_id TEXT PRIMARY KEY,
    user_id TEXT REFERENCES users(user_id) ON DELETE CASCADE,
    useragent TEXT,
    ipadress INTEGER,
    device_type TEXT,
    operating_system TEXT,
    browser TEXT,
    location TEXT,
    session_start TIMESTAMP,
    timespent INTEGER
);

CREATE TABLE IF NOT EXISTS events (
    event_id INTEGER PRIMARY KEY,
    user_id TEXT REFERENCES users(user_id) ON DELETE CASCADE,
    session_id TEXT REFERENCES sessions(session_id) ON DELETE CASCADE,
    event_type TEXT,
    page_url TEXT,
    event_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    actions TEXT,
    event_count INTEGER AUTO_INCREMENT,
    metadata TEXT
);
