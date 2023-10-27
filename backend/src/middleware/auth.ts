import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../model/user';

declare global {
    namespace Express {
        interface Request {
            user: User
        }
    }
}

export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token is missing.' });
    }

    try {
        const decoded = jwt.verify(token, config.secretKey) as { id: string, exp: number };

        const user = await User.findOne({ where: { id: decoded.id } });

        if (!user) {
            return res.status(403).json({ message: 'Access denied. User not found.' });
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Access denied. Token is invalid.' });
    }
}