import { errorResponse } from "../utils/readDb";

 const isUserLogged = (req, res, next) => {
       return req.headers.authorization ? next() : res.json(errorResponse(401, "User token missing"));
}

export default isUserLogged;