import { ProductDb } from "../types";
import { connection } from "./connection";


export default async function insertProduct(insertProduct: ProductDb): Promise<string> {

    const { id, name, price, image_url } = insertProduct

    await connection('labecommerce_products')
    .insert({
        id,
        name,
        price,
        image_url
    })

    return `O produto: ${name}, foi criado com sucesso!`
    
}