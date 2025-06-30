import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full h-[20px] py-7 px-10 bg-[#181818] absolute bottom-0 flex items-center justify-between">
      <div className="flex flex-col gap-2 xl:flex-row xl:gap-20 xl:items-center">
        <span className="text-white text-[10px] xl:text-[13px]">
          Designed and built by{" "}
          <span className="text-[#F15D22]">Tsotne Tsintsadze</span>
        </span>
        <span className="text-[#b7b7b7] text-[9px] xl:text-[12px]">
          cotnecincadze998@gmail.com
        </span>
      </div>
      <Link
        className="text-[#F15D22] text-[10px] underline cursor-pointer xl:text-[13px]"
        to={"/main/home/about"}>
        ABOUT ME
      </Link>
    </footer>
  );
}
