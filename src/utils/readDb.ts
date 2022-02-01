import { readFileSync, writeFileSync } from 'fs';
import path from 'path';


export const readDB = (file = "src/db/database.json") => {
  let rawdata = readFileSync(file);
  return JSON.parse(rawdata.toString());
};

export const findProductById = (id, db = readDB()) => {
    return db.find(({ productId, isAvailable }) => productId === id && isAvailable);
}

export const findIndexOfProduct = (id, db = readDB()) => {
   return db.findIndex((prod) => prod.productId == id)
}

export const changeDataInDB = (data, file='src/db/database.json') => {
    return writeFileSync(file, JSON.stringify(data));
}

export const findProductsByIds = (ids, db = readDB()) => {
  const itemsFound = [];
  ids.forEach((e, index) => {
    const findProduct = findProductById(e, db);
    if (findProduct) {
      return itemsFound.push(findProduct);
    } else {
      throw new Error(`product with ID ${e} not found**`);
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

export const successResponse = (code, data) => {
  return {
    code,
    status: 'success',
    data,
  };
};
