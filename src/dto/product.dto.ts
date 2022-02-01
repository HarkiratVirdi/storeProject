import { ApiProperty } from '@nestjs/swagger';


export class CreateProductDTO {
  @ApiProperty({type: String, description: "product Id", required: true})
  productId: string;

  @ApiProperty({type: Number, description: "price of product", required: true})
    price: number;


    @ApiProperty({type: String, description: "Name of Product", required: true})
    name: string;

    @ApiProperty({type: Boolean, description: "Product Virtually Deleted", default: true})
    isAvailable: boolean;
  }

