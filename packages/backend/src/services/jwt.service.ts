import jwt from 'jsonwebtoken';

export default class JwtService {
  generateToken(id: string) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION
    });
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return null;
    }
  }
}
