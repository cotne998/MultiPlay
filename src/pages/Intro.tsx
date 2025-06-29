import { AnimatePresence, motion } from "framer-motion";
import Logo from "/assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const [displayTitle, setDisplayTitle] = useState<boolean>(false);
  const [displayLogo, setDisplayLogo] = useState<boolean>(false);
  const [displayAuthor, setDisplayAuthor] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDisplayLogo = () => {
    setTimeout(() => {
      setDisplayLogo(true);
    }, 300);
  };

  const handleDisplayTitle = () => {
    setTimeout(() => {
      setDisplayTitle(true);
    }, 1000);
  };

  const handleDisplayAuthor = () => {
    setTimeout(() => {
      setDisplayAuthor(true);
    }, 3000);
  };

  useEffect(() => {
    handleDisplayLogo();
    handleDisplayTitle();
    handleDisplayAuthor();
    setTimeout(() => {
      navigate("/main");
    }, 7000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] relative">
      <motion.div layout className="flex flex-col items-center gap-7">
        <AnimatePresence mode="wait">
          {displayLogo && (
            <motion.img
              key="logo"
              src={Logo}
              layout
              alt="logo image"
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                duration: 0.2,
              }}
              className="w-[265px]"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {displayTitle && (
            <motion.h1
              key="title"
              layout
              initial={{
                opacity: 0,
                y: 40,
                filter: "drop-shadow(0 0 0px #F15D22)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: [
                  "drop-shadow(0 0 16px #f15d226a) drop-shadow(0 0 12px #F15D22)",
                ],
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 12,
                duration: 0.2,
                filter: { delay: 1, duration: 1 }, // აქ იმუშავებს duration
              }}
              className="title text-white text-center text-[30px] font-bold">
              MULTI<span className="text-[#F15D22]">PLAY</span>
            </motion.h1>
          )}
        </AnimatePresence>
      </motion.div>
      {displayAuthor && (
        <motion.p
          className="text-white absolute bottom-[10%]"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ overflow: "hidden", display: "inline-block" }}>
          Designed and built by{" "}
          <span className="text-[#F15D22]">Tsotne Tsintsadze</span>
        </motion.p>
      )}
    </div>
  );
}
