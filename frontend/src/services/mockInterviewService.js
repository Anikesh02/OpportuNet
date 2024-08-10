import { apiCall } from "./apiBase";


export async function getQuestions(data) {
  return await apiCall("post", "/mock-interview/get-questions", data);
}

export async function evaluateAnswer(data) {
  return await apiCall("post", "/mock-interview/evaluate-answer", data);
}