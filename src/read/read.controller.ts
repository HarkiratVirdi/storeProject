import {  Controller, Get, Query } from '@nestjs/common';
import { errorResponse, findProductsByIds, successResponse } from '../utils/readDb';

@Controller('read')
export class ReadController {
    @Get()
    read(@Query('ids') ids)
    {
        //converting the string of ids to an Array. 
        const convertToArray = ids.split(",");
        
        //finding the products by Ids using findProductsByIDS function.
        try{
            const products = findProductsByIds(convertToArray);
            return successResponse(200, products);
        }catch(err){
            console.log("err", err.message);
            return errorResponse(403, err.message);
        }
    }
}
