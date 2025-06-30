import MyImage from "/assets/image-me.png";

export default function About() {
  return (
    <section className="p-5 flex flex-col gap-5">
      <h1 className="title text-white text-center text-[18px] md:text-[32px]">
        MULTI<span className="text-[#F15D22]">PLAY</span>
      </h1>
      <div className="md:flex justify-center">
        <p className="text-white text-[12px] md:text-[15px] md:w-[500px]">
          This is the first version of{" "}
          <span className="text-[#F15D22]">Multiplay,</span>
          where you can explore different simple games and play with your
          friends. More games will be added soon! If you would like to contact
          me, please check information below.
        </p>
      </div>
      <div className="mt-30 flex flex-col items-center gap-5 md:gap-10">
        <h2 className="text-white text-center font-bold text-[18px]">
          CONTACT ME
        </h2>
        <img
          className="w-[100px] md:w-[150px]"
          src={MyImage}
          alt="contact image"
        />
        <div className="flex items-center gap-7">
          <a href="https://www.facebook.com/cotnikoo.cincadze/">
            <img
              src="/assets/icon-facebook.svg"
              alt="facebook image"
              className="hover:scale-[1.15] transition-[0.2s]"
            />
          </a>
          <a href="https://www.instagram.com/cotnec998/">
            <img
              className="hover:scale-[1.15] transition-[0.2s]"
              src="/assets/icon-instagram.svg"
              alt="instagram image"
            />
          </a>
          <a href="https://www.linkedin.com/in/tsotne-tsintsadze-8745622b5/">
            <img
              className="w-[20px] filter invert hover:scale-[1.15] transition-[0.2s]"
              src="/assets/icon-linkedin.svg"
              alt="linkedin image"
            />
          </a>
          <a href="mailto:cotnecincadze998@gmail.com">
            <img
              className="hover:scale-[1.15] transition-[0.2s]"
              src="/assets/icon-email.svg"
              alt="email image"
            />
          </a>
        </div>
      </div>
      <span className="text-center text-[#F15D22]">
        cotnecincadze998@gmail.com
      </span>
    </section>
  );
}
