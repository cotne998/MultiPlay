import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Tictactoe() {
  const [squares, setSquares] = useState<(null | "X" | "O")[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState(true);
  const [isOver, setIsOver] = useState(false);
  const [winnerIndexes, setWinnerIndexes] = useState<number[] | null>(null);

  const WIN_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function calculateWinner(squares: (null | "X" | "O")[]) {
    for (const [a, b, c] of WIN_COMBINATIONS) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], indexes: [a, b, c] };
      }
    }
    return null;
  }

  const handleMove = (i: number) => {
    if (squares[i] || isOver) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    const result = calculateWinner(nextSquares);
    if (result) {
      setIsOver(true);
      setWinnerIndexes(result.indexes);
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsOver(false);
    setXIsNext(true);
    setWinnerIndexes(null);
  };

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="flex flex-col items-center gap-10 p-10 h-[100vh] xl:gap-20">
      <div className="flex gap-4 mb-6 ">
        <h1
          data-aos="zoom-in"
          className="text-[#F15D22] text-[20px] md:text-[32px] font-bold title">
          Tic <span className="text-white">Tac</span> Toe
        </h1>
      </div>
      <div
        data-aos="zoom-in"
        className="grid grid-cols-3 gap-2 w-[170px] mx-auto md:w-[280px] md:gap-5">
        {squares.map((value, i) => (
          <button
            key={i}
            onClick={() => handleMove(i)}
            className="w-[50px] h-[50px] bg-[#3e3e3e] text-2xl font-bold rounded shadow flex items-center justify-center hover:bg-[#5d5d5d] transition md:w-[80px] md:h-[80px]">
            <AnimatePresence>
              {value && (
                <motion.span
                  key={value + i}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className={`md:text-[38px] ${
                    winnerIndexes && winnerIndexes.includes(i)
                      ? "text-[#F15D22]"
                      : "text-[#fff]"
                  }`}
                  transition={{ duration: 0.1 }}>
                  {value}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
      <button
        data-aos="zoom-in"
        onClick={handleReset}
        className="bg-[#F15D22] text-white font-semibold px-2 py-[2px] text-[14px] rounded-xl cursor-pointer w-[200px] hover:bg-[#f15d22c5] transition-[0.2s] md:text-[20px]">
        RESET
      </button>
      {isOver && (
        <motion.h1
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-white text-[30px] font-bold">
          GAME OVER
        </motion.h1>
      )}
    </section>
  );
}
