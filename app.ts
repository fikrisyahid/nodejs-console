import PromptSync from "prompt-sync";
import { print, println } from "./functions";

const input = PromptSync();

/**
 * Example :
 * Rock, paper, and scissors game
 */
const choices = ["rock", "paper", "scissors"];

const computerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

let playerScore = 0;
let computerScore = 0;

const decideWinner = (player: string, computer: string) =>
  player === computer
    ? "tie"
    : (player === "scissors" && computer === "paper") ||
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock")
    ? "player"
    : "computer";

while (playerScore < 3 && computerScore < 3) {
  const player = input(
    "What is your pick? rock, paper or scissors: "
  ).toLowerCase();
  const computer = computerChoice().toLowerCase();

  if (!choices.includes(player)) {
    println("Player input must be either rock, paper, or scissors");
    continue;
  }

  const winner = decideWinner(player, computer);
  winner === "player" && playerScore++;
  winner === "computer" && computerScore++;

  println(
    `${player} vs ${computer} ${winner === "tie" ? "Tied!" : `${winner} wins!`}`
  );
  println(`player score: ${playerScore} computer score: ${computerScore}`);
  println("------------------------------------");
}

println(playerScore === 3 ? "Player Wins!" : "Computer wins!");
println("Game is over");
