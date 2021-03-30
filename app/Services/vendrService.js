import { ProxyState } from "../AppState.js";





class VendrService {
    item(id) {
        let snack = ProxyState.snack
        if (snack[id])
            if (money > snack.price) {
                money - snack.price
                snack.quantity - 1

            }
    }
}


export const vendrService = new VendrService();

