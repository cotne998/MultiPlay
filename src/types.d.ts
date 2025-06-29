declare module "swiper/css";

interface IMenuContext {
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface INavigation {
  name: string;
  path: string;
}

interface IPlayersContext {
  isTwoPlayers: boolean;
  setIsTwoPlayers: React.Dispatch<React.SetStateAction<boolean>>;
}
