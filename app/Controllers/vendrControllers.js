import { ProxyState } from "../AppState.js"
import { vendrService } from "../Services/vendrService.js"


function _draw() {
    let snack = ProxyState.snack

    document.getElementById('snack').innerHTML = `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${snack.name}</h5>
        <p class="card-text">${snack.price}</p>
        <p class="card-text">${snack.quantity}</p>
    </div>
</div>`

    let money = ProxyState.money

    document.getElementById('money').innerHTML = `<div class="card">
    <div class="card-body">
        <h5 class="card-title">Money: ${money}</h5>
    </div>
</div>`
}


export default class vendrController {
    constructor() {
        ProxyState.on('snack', _draw)
        _draw()
    }

    item(id) {
        vendrService.item(id)
    }
}

