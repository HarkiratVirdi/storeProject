import {  Controller, Get, Query } from '@nestjs/common';
import { errorResponse, findProductsByIds, successResponse } from 'src/utils/readDb';

@Controller('read')
export class ReadController {
    @Get()
    read(@Query() queryPassed)
    {
        //destructing the ids obj from the query
        const {ids} = queryPassed;

        //converting the string of ids to an Array. 
        const convertToArray =  ids.split(",");
        
        //finding the products by Ids using findProductsByIDS function.
        try{
            const products = findProductsByIds(convertToArray);
            return successResponse(products);
        }catch(err){
            console.log("err", err);
            return errorResponse(403, err);
        }
    }
}
