import products from "@/app/products";
import { toLinkFormat } from "@/helpers/helpers";

export const getProductByBrand = (brand) => products.find(el => toLinkFormat(el.brand) === toLinkFormat(brand));

export const getProductByName = (brand, name) => {
    const brandProduct = products.find(el => toLinkFormat(el.brand) === toLinkFormat(brand))

    if (!brandProduct) return [];
    return {
        brand: brandProduct.brand,
        model: brandProduct.models.find(el => toLinkFormat(el.name) === toLinkFormat(name))
    };
};