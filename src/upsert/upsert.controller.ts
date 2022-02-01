import { Body, Controller, Post } from '@nestjs/common';
import { changeDataInDB, errorResponse, findIndexOfProduct, readDB, successResponse} from 'src/utils/readDb';
import CreateProductDto  from '../dto/product';

@Controller('upsert')
export class UpsertController {
 @Post()
    upsert(@Body() bodyObj: Array<CreateProductDto>)
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
