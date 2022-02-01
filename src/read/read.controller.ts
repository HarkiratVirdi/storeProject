import {  Controller, Get, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiQuery, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { errorResponse, findProductsByIds, successResponse } from '../utils/readDb';

@Controller('read')
export class ReadController {
    @Get()
    @ApiCreatedResponse({description: 'Fetching Products'})
    @ApiUnauthorizedResponse({description: "User Token Missing"})
    @ApiQuery({name: "ids", required: true, type: String, description: 'id of products to search'})
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
