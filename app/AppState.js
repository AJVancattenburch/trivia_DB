import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Question } from "./Models/Question"
import { loadState } from "./Utils/Store.js"
// import { questionsService } from "./Services/QuestionsService.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
}
/** @type {import('./Models/Question').Question[]} */
  questions = loadState('questions', [Question])

/** @type {import('./Models/Question').Question|null} */
activeQuestion = null
export const appState = new Proxy(new AppState(), {
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
