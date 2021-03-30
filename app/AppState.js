import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Snack from "./Models/vendrModel.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  /** @type {Money} */
  money = 20;
  /** @type {Snack} */
  snack = new Snack(111, 'Oreos', 1.00, 5)



}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})






