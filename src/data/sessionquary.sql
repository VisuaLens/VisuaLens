  INSERT INTO sessions (userid, sessionid, ip, timestamp)
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
