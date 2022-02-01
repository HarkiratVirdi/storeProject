import { Body, Controller, Post } from '@nestjs/common';
import { changeDataInDB, errorResponse, findIndexOfProduct, findProductById, readDB, successResponse} from 'src/utils/readDb';

@Controller('upsert')
export class UpsertController {
 @Post()
    upsert(@Body() bodyObj)
    {   
        //storing the original data 
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
            console.log("bodyprod", e);
            const indexOfProduct = findIndexOfProduct(e.productId);
            if(indexOfProduct > -1)
            {
                 originalData[indexOfProduct] = e;
                console.log("found", indexOfProduct)
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
