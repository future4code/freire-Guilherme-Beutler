import { purchasesData } from "../types";
import { connection } from "./connection";

export default async function insertPurchase(purchase: purchasesData): Promise<string> {

    const { id, userId, productId, quantity, totalPrice } = purchase

    await connection('labecommerce_purchases')
        .insert({
            id,
            user_id: userId,
            product_id: productId,
            quantity,
            total_price: totalPrice
        })

    return `Compra com id: ${id}, registrada com sucesso!`
    
}