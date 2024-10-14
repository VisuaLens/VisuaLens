import crypto from 'crypto';

export function generateKey(length = 16) {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
}
