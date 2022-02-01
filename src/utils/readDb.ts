import { readFileSync, writeFileSync } from 'fs';

export const readDB = () => {
  let rawdata = readFileSync('src/db/database.json');
  return JSON.parse(rawdata.toString());
};

export const findProductById = (id) => {
    return readDB().find(({ productId }) => productId === id);
}

export const findIndexOfProduct = (id) => {
   return readDB().findIndex((prod) => prod.productId == id)
}

export const changeDataInDB = (data) => {
    console.log("data", data);
    return writeFileSync('src/db/database.json', JSON.stringify(data));
}

export const findProductsByIds = (ids) => {
  const itemsFound = [];

  ids.forEach((e, index) => {
    const findProduct = findProductById(e);
    if (findProduct) {
      return itemsFound.push(findProduct);
    } else {
      console.log(`product ${e} not found**`);
      throw `product ${e} not found**`;
    }
  });
  return itemsFound;
};

export const errorResponse = (code, error) => {
  return {
    code,
    status: 'error',
    error,
  };
};

export const successResponse = (data) => {
  return {
    code: 200,
    status: 'success',
    data,
  };
};
