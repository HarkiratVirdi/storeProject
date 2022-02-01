import { readFileSync, writeFileSync } from 'fs';

export const readDB = () => {
  let rawdata = readFileSync('src/db/database.json');
  return JSON.parse(rawdata.toString());
};

export const findProductById = (id, db = readDB()) => {
    return db.find(({ productId, isAvailable }) => productId === id && isAvailable);
}

export const findIndexOfProduct = (id, db = readDB()) => {
   return db.findIndex((prod) => prod.productId == id)
}

export const changeDataInDB = (data) => {
    return writeFileSync('src/db/database.json', JSON.stringify(data));
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
