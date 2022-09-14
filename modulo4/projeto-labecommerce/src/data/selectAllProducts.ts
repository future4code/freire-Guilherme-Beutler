import { ProductDb } from "../types";
import { connection } from "./connection";

const typeProduct = (prod: any) => {
    const createProduct: ProductDb = {
        id: prod.id,
        name: prod.name,
        price: prod.price,
        image_url: prod.image_url
    }
    return createProduct
}

export default async function selectAllProducts(): Promise<ProductDb[] | undefined> {
    
    const result = await connection('labecommerce_products')

    const allProductsType = result.map((prod) => {
        return typeProduct(prod)
    })

    return allProductsType
}