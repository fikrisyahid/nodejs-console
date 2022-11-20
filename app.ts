import PromptSync from "prompt-sync";
import { print, println } from "./functions";

const input = PromptSync();

/**
 * Example :
 * Print a triangle with amount of rows defined by user
 */
let limit;
while (true) {
  limit = Number(input("Please enter the number of rows of triangle: "));
  if (Number.isInteger(limit)) {
    break;
  }
  println("Input must be a number!");
}
for (let i = 1; i <= limit; i++) {
  for (let j = 1; j <= limit - i; j++) {
    print(" ");
  }
  for (let k = 1; k < i * 2; k++) {
    print("*");
  }
  println();
}
