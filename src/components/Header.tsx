import Logo from "/assets/logo.png";
import Menu from "/assets/icon-menu.svg";
import Close from "/assets/icon-close.svg";
import { useContext } from "react";
import { MenuContext } from "../pages/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const navigation: INavigation[] = [
  {
    name: "Home",
    path: "/main/home",
    image: "/assets/icon-home.svg",
  },
  {
    name: "Tic Tac Toe",
    path: "/main/home/tic-tac-toe",
    image: "/assets/icon-close.svg",
  },
  {
    name: "Rock Paper Scissors",
    path: "/main/home/rock-paper-scissors",
    image: "/assets/icon-scissors.svg",
  },
  {
    name: "Flip a coin",
    image: "/assets/icon-flip.svg",
    path: "/main/home/coin",
  },
  {
    name: "About",
    image: "/assets/icon-about.svg",
    path: "/main/home/about",
  },
];

export default function Header() {
  const { displayMenu, setDisplayMenu } = useContext(MenuContext);
  const navigate = useNavigate();

  return (
    <>
      <header className="p-[15px] flex justify-between bg-[#313131] items-center md:p-[20px] xl:px-25 z-100 fixed w-full">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/main/home")}>
          <img src={Logo} alt="logo icon" className="w-[24px]" />
          <span className="text-white text-[10px] title">
            MULTI<span className="text-[#F15D22]">PLAY</span>
          </span>
        </div>
        {displayMenu ? (
          <AnimatePresence>
            <motion.img
              src={Close}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 90 }}
              exit={{ opacity: 0, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 13,
                duration: 0.2,
              }}
              alt="close icon"
              onClick={() => setDisplayMenu(false)}
              className="w-[27px] cursor-pointer"
            />
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <motion.img
              className="w-[27px] cursor-pointer"
              src={Menu}
              alt="menu icon"
              onClick={() => setDisplayMenu(true)}
            />
          </AnimatePresence>
        )}
      </header>
      <AnimatePresence>
        {displayMenu && (
          <>
            <motion.div
              className="fixed inset-0 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
              }}
              style={{ background: "#000" }}
              onClick={() => setDisplayMenu(false)}
            />
            <motion.nav
              initial={{ opacity: 1, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: -300 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 23,
                bounce: 1,
                duration: 0.2,
              }}
              className="fixed top-0 w-full bg-[#272727] p-5 pt-20 z-20  shadow-xl">
              <ul className="flex flex-col gap-5">
                {navigation.map((item, index) => (
                  <>
                    <li
                      key={index}
                      onClick={() => setDisplayMenu(false)}
                      className="text-white flex items-center gap-3">
                      <img
                        className="w-[20px]"
                        src={item.image}
                        alt={`${item.name} icon`}
                      />

                      <Link
                        className="hover:text-[#F15D22] transition-[0.2s]"
                        to={`${item.path}`}>
                        {item.name}
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
