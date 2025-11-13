import jwt from "jsonwebtoken";

import { SECRET_KEY, JWT_EXPIRATION_TIME } from "../config/config.js";

export const TokenEncode = (email, user_id) => {

    let KEY = SECRET_KEY;
    let EXPIRE = {expiresIn: JWT_EXPIRATION_TIME};
    let PAYLOAD = {email: email, user_id: user_id};

    return jwt.sign(PAYLOAD, KEY, EXPIRE);

}

export const TokenDecode = (token) => {

    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }

};