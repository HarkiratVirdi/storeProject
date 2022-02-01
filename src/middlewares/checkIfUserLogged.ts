import { NestMiddleware } from "@nestjs/common";
import { errorResponse } from "src/utils/readDb";

export default class isUserLogged implements NestMiddleware{
    use(req, res, next ){
       return req.headers.authorization ? next() : res.json(errorResponse(401, "User token missing"));
    }   
}