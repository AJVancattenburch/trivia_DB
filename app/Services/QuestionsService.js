import { appState } from "../AppState";
import { Question } from "../Models/Question.js;"
import { saveState } from "../Utils/Store";
class QuestionsService {
  constructor() {
    console.log('Q service log confirm')
  }

}

export const questionsService = new QuestionsService();