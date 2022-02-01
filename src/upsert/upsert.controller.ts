import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { changeDataInDB, errorResponse, findIndexOfProduct, readDB, successResponse} from 'src/utils/readDb';
import {CreateProductDTO}  from '../dto/product.dto';

@Controller('upsert')
export class UpsertController {
 @Post()
 @ApiCreatedResponse({description: "Products updated or added"})
 @ApiUnauthorizedResponse({description: "User Token Missing"})
 @ApiBody({type: [CreateProductDTO]})
 @UsePipes(ValidationPipe)
    upsert(@Body() bodyObj: Array<CreateProductDTO>)
    {
        try{
        const originalData = readDB();

        originalData.forEach((e) => {
            if(!e.isAvailable)
            {
                e.isAvailable = true;
            }
        })

        //looping through body obj
        bodyObj.forEach((e) => {
            const indexOfProduct = findIndexOfProduct(e.productId);
            if(indexOfProduct > -1)
            {
                 originalData[indexOfProduct] = e;
            }else{
                originalData.push(e);
            }
        })
        changeDataInDB(originalData);
        return successResponse(300, originalData);
    }catch(err){
        return errorResponse(404, err.message)
    }
    }
}
