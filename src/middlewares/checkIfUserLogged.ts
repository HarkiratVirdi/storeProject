import { errorResponse } from "../utils/readDb";

 const isUserLogged = (req, res, next) => {
       return req.headers.authorization ? next() : next();
}

export default isUserLogged;