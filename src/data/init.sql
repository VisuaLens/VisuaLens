-- init.sql
CREATE TABLE IF NOT EXISTS sessions (
    id SERIAL PRIMARY KEY,
    userid VARCHAR(50),
    sessionid VARCHAR(50),
    ip VARCHAR(50),
    timestamp TIMESTAMP
);

CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    sessionid VARCHAR(50),
    event_type VARCHAR(100),
    event_data JSONB,
    event_time TIMESTAMP,
    FOREIGN KEY (sessionid) REFERENCES sessions(sessionid)
);
