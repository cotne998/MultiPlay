import RockImg from "/assets/rock-emoji.png";
import PaperImg from "/assets/paper-emoji.png";
import ScissorsImg from "/assets/scissors-emoji.png";
import { useState, useContext, useEffect } from "react";
import { PLayersContext } from "./Layout";
import { AnimatePresence, motion } from "framer-motion";
import OtherGames from "../components/OtherGames";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Rock() {
  const [currentMove, setCurrentMove] = useState<string>("");
  const [computerMove, setComputerMove] = useState<string>("");
  const [playerTwoMove, setPlayerTwoMove] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [yourScore, setYourScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  useEffect(() => {
    AOS.init({});
  }, []);

  const { isTwoPlayers, setIsTwoPlayers } = useContext(PLayersContext);

  console.log(currentMove);
  console.log(computerMove);

  const handleMove = (move: string) => {
    setCurrentMove(move);

    const moves = ["rock", "paper", "scissors"];
    const randomMove = moves[Math.floor(Math.random() * 3)];
    setComputerMove(randomMove);

    let outcome = "";

    switch (true) {
      case move === randomMove:
        outcome = "tie";
        break;

      case move === "rock" && randomMove === "scissors":
      case move === "paper" && randomMove === "rock":
      case move === "scissors" && randomMove === "paper":
        outcome = `Computer chose ${randomMove}, YOU WIN!`;
        setYourScore((prev) => prev + 1);
        break;

      default:
        outcome = `Computer chose ${randomMove}, YOU LOSE!`;
        setComputerScore((prev) => prev + 1);
        break;
    }

    setResult(outcome);
  };

  const handleTwoPlayersMove = (move: string) => {
    if (!currentMove) {
      setCurrentMove(move);
      setResult("Waiting for Player 2...");
    } else if (!playerTwoMove) {
      setPlayerTwoMove(move);

      let outcome = "";

      switch (true) {
        case currentMove === move:
          outcome = "tie";
          break;
        case currentMove === "rock" && move === "scissors":
        case currentMove === "paper" && move === "rock":
        case currentMove === "scissors" && move === "paper":
          outcome = "Player 1 wins!";
          setYourScore((prev) => prev + 1);
          break;
        default:
          outcome = "Player 2 wins!";
          setComputerScore((prev) => prev + 1);
          break;
      }

      setResult(outcome);

      setTimeout(() => {
        setCurrentMove("");
        setPlayerTwoMove("");
        setResult("");
      }, 1500);
    }
  };

  const handleReset = () => {
    setYourScore(0);
    setComputerScore(0);
    setResult("");
  };

  return (
    <>
      <section className="flex flex-col gap-15 p-5 md:w-[500px] md:m-auto md:gap-20">
        <div data-aos="zoom-in" className="flex gap-5 justify-center">
          <button
            onClick={() => setIsTwoPlayers(false)}
            className={`text-white bg-${
              isTwoPlayers ? "[#3f3f3f]" : "[#F15D22]"
            }  px-5 py-[2px] rounded-[10px] cursor-pointer transition-[0.2s] md:text-[24px] md:px-7 md:py-[7px]`}>
            1 Player
          </button>
          <button
            onClick={() => setIsTwoPlayers(true)}
            className={`text-white bg-${
              isTwoPlayers ? "[#F15D22]" : "[#3f3f3f]"
            } px-5 py-[2px] rounded-[10px] cursor-pointer transition-[0.2s]  md:text-[24px] md:px-7 md:py-[7px]`}>
            2 Players
          </button>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col gap-1 text-white text-[12px] md:text-[18px] md:gap-5">
          {isTwoPlayers ? (
            <>
              <span className="title">
                P1: <span className="text-[#f15D22]">{yourScore}</span>
              </span>
              <span className="title">
                P2: <span className="text-[#F15D22]">{computerScore}</span>
              </span>
            </>
          ) : (
            <>
              <span className="title">
                YOU: <span className="text-[#f15D22]">{yourScore}</span>
              </span>
              <span className="title">
                COMPUTER:{" "}
                <span className="text-[#F15D22]">{computerScore}</span>
              </span>
            </>
          )}
        </div>
        <div data-aos="zoom-in" className="flex justify-center gap-7 md:gap-10">
          <img
            src={RockImg}
            alt="rock image"
            onClick={() =>
              isTwoPlayers ? handleTwoPlayersMove("rock") : handleMove("rock")
            }
            className="w-[60px] h-[60px] bg-[#565656] rounded-[50%] p-2 cursor-pointer md:w-[100px] md:h-[100px] md:p-5 hover:scale-[1.2] transition-[0.2s]"
          />
          <img
            src={PaperImg}
            alt="paper image"
            onClick={() =>
              isTwoPlayers ? handleTwoPlayersMove("paper") : handleMove("paper")
            }
            className="w-[60px] h-[60px] bg-[#565656] rounded-[50%] p-2 cursor-pointer md:w-[100px] md:h-[100px] md:p-5 hover:scale-[1.2] transition-[0.2s]"
          />
          <img
            src={ScissorsImg}
            alt="scissors image"
            onClick={() =>
              isTwoPlayers
                ? handleTwoPlayersMove("scissors")
                : handleMove("scissors")
            }
            className="w-[60px] h-[60px] bg-[#565656] rounded-[50%] p-2 cursor-pointer md:w-[100px] md:h-[100px] md:p-5 hover:scale-[1.2] transition-[0.2s]"
          />
        </div>
        <div data-aos="zoom-in" className="flex justify-center">
          <button
            onClick={handleReset}
            className="text-white font-semibold bg-[#F15D22] text-[20px] px-10 py-[4px] cursor-pointer rounded-[10px] md:text-[24px]">
            RESET
          </button>
        </div>
        {result && (
          <AnimatePresence>
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              exit={{ clipPath: "inset(0 100% 0 0)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-white">
              {result}
            </motion.span>
          </AnimatePresence>
        )}
      </section>
      <div className="mt-30 flex flex-col gap-7">
        <h1
          data-aos="zoom-in"
          className="title text-center text-white text-[20px]">
          OTHER GAMES
        </h1>
        <OtherGames data-aos="zoom-in" />
      </div>
    </>
  );
}
