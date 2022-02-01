import { Controller, Delete, Query } from '@nestjs/common';
import {
    changeDataInDB,
  errorResponse,
  findIndexOfProduct,
  findProductsByIds,
  readDB,
  successResponse,
} from 'src/utils/readDb';

@Controller('delete')
export class DeleteController {
  @Delete()
  remove(@Query('ids') ids) {
    const originalData = readDB();
    const convertToArray = ids.split(",").sort((a, b) => a - b);
    try {
      const allproductsWithIDS = findProductsByIds(convertToArray);

      //permanently delete
        // for(let i = allproductsWithIDS.length - 1; i >= 0; i--)
        // {
        //     const indexOfProduct = findIndexOfProduct(allproductsWithIDS[i].productId);
        //     if(indexOfProduct > -1)
        //     {
        //         originalData.splice(indexOfProduct, 1);
        //     }
        // }

        //virtually delete
        allproductsWithIDS.forEach((e) => {
            const indexOfProduct = findIndexOfProduct(e.productId);
            if(indexOfProduct > -1)
            {
                originalData[indexOfProduct].isAvailable = false;
            }
        })

        changeDataInDB(originalData);
      return successResponse(204, originalData);
    } catch (err) {
      console.log('err', err.message);
      return errorResponse(403, err.message);
    }
  }
}
