import { Body, Controller, Post } from '@nestjs/common';
import { changeDataInDB, findIndexOfProduct, findProductById, readDB} from 'src/utils/readDb';

@Controller('upsert')
export class UpsertController {
 @Post()
    upsert(@Body() bodyObj)
    {   
        //storing the original data 
        const originalData = readDB();

        //looping through body obj
        bodyObj.forEach((e) => {
            console.log("bodyprod", e);
            const indexOfProduct = findIndexOfProduct(e.productId);
            if(indexOfProduct !== -1)
            {
                console.log("found", indexOfProduct)
                originalData[indexOfProduct] = e;
            }else{
                originalData.push(e);
            }
        })
        
        changeDataInDB(originalData);

        return originalData;
    }
}
