import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="p-5">
      <h1
        data-aos="zoom-in"
        className="text-[22px] text-white font-semibold text-center">
        <span className="text-[#F15D22]">GAMES</span> YOU CAN PLAY
      </h1>
      <section data-aos="zoom-in" className="relative xl:p-5">
        <button
          className="absolute left-0 top-[50%]  translate-y-[-50%] cursor-pointer z-10"
          onClick={() => swiperRef.current?.slidePrev()}>
          <img
            className="filter brightness-80 hover:brightness-200 transition-0.2s hover:scale-[1.1]"
            src={"/assets/icon-back.svg"}
            alt="previous"
          />
        </button>
        <button
          className="absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer z-10"
          onClick={() => swiperRef.current?.slideNext()}>
          <img
            className="filter brightness-80 hover:brightness-200 transition-0.2s hover:scale-[1.1]"
            src={"/assets/icon-forward.svg"}
            alt="next"
          />
        </button>
        <Swiper
          style={{ padding: "30px" }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={50}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          slidesPerView={1}
          loop
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          modules={[Navigation, Autoplay]}>
          {data.map((item, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <motion.div className="cursor-grab active:cursor-grabbing hover:scale-[1.04] transition-[0.2s] flex flex-col justify-between items-center gap-5 p-3 border-1 border-[#27dec000] rounded-[10px] bg-[#1e1e1e] shadow-[0_0_12px_2px_#f15d2278] hover:shadow-[0_0_12px_8px_#f15d228d]  xl:min-h-[600px] xl:p-8 xl:gap-8">
                <img
                  src={item.thumbnail}
                  alt="game thumbnail"
                  className="rounded-[10px]"
                />
                <div className="flex flex-col gap-5 xl:gap-10">
                  <h2 className="text-center text-white text-[18px] xl:text-[28px]">
                    {item.name}
                  </h2>
                  <p className="text-white text-[12px] p-2 xl:text-[14px]">
                    {item.description}
                  </p>
                </div>
                <Link
                  className="bg-[#F15D22] text-center p-[2px] text-white text-[13px] xl:text-[16px]  rounded-2xl w-[50%] cursor-pointer"
                  to={item.route}>
                  <button className="cursor-pointer">Play</button>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
