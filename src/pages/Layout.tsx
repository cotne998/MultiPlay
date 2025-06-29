import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { createContext } from "react";
import Footer from "../components/Footer";

export const MenuContext = createContext<IMenuContext>({
  displayMenu: false,
  setDisplayMenu: () => {},
});

export const PLayersContext = createContext<IPlayersContext>({
  isTwoPlayers: false,
  setIsTwoPlayers: () => {},
});

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [isTwoPlayers, setIsTwoPlayers] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === "/main") {
      navigate("/main/home", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <MenuContext.Provider value={{ displayMenu, setDisplayMenu }}>
        <Header />
      </MenuContext.Provider>
      <main className="py-[70px]">
        <PLayersContext.Provider value={{ isTwoPlayers, setIsTwoPlayers }}>
          <Outlet />
        </PLayersContext.Provider>
      </main>
      <Footer />
    </>
  );
}
