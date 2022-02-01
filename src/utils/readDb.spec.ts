import { findIndexOfProduct, findProductById, findProductsByIds, readDB } from "./readDb"

const products = [{ productId: "1", name: "testing 1", price: "100", isAvailable: true }, { productId: "2", name: "testing 2", price: "1100", isAvailable: false }];

describe(('Find Product By Ids function'), () => {
    test("find products with ID if object is Available", () => {
        expect.assertions(2);
        expect(findProductsByIds(["1"], products)).toStrictEqual([products[0]]);
        expect(findProductsByIds(["1"], products).length).toEqual(1);
    })

    test("find products with ID if no ids are passed", () => {
        expect.assertions(1);

        expect(findProductsByIds([], products)).toStrictEqual([]);
    })

    test("find products with ID if object is not available", () => {
        expect.assertions(1);
        expect(() => { findProductsByIds(["23142"], products) }).toThrow("product with ID 23142 not found**");
    })
})

describe('Find product by Id function', () => {
    test("findProductById should find the product with id ", () => {
        expect.assertions(1);
        expect(findProductById('1', products)).toStrictEqual(products[0]);
    })

    test("findProductById should find the product with id ", () => {
        expect.assertions(1);
        expect(findProductById('121321321', products)).toBeUndefined();
    })
});

describe('Find Index of product function', () => {
    test("should return index of product", () => {
        expect.assertions(1);
        expect(findIndexOfProduct('1', products)).toBe(0);
    })

    test("should return -1 index if product not found", () => {
        expect.assertions(1);
        expect(findIndexOfProduct('121321321', products)).toBe(-1);
    })
});
