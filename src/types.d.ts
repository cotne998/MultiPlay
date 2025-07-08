declare module "swiper/css";
declare module "aos";

interface IMenuContext {
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface INavigation {
  name: string;
  path: string;
  image: string;
}

interface IPlayersContext {
  isTwoPlayers: boolean;
  setIsTwoPlayers: React.Dispatch<React.SetStateAction<boolean>>;
}
