function Hero() {
  return (
    <section
      className="min-h-screen relative flex flex-col justify-center pt-24 text-white
      bg-[radial-gradient(circle_at_80%_55%,#F4A261_0%,transparent_70%),linear-gradient(to_right,#020617,#0B1F3A,#164E8A,#7C3F63,#C45A4A,#F4A261)]"
    >
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-[80px_1fr] gap-8">
          <div className="pt-[-20px] flex flex-col items-center">
            <div className="w-px h-70 bg-white/70 mb-4"></div>

            <div className="grid grid-cols-2 gap-x-6 text-sm md:text-lg lg:text-xl font-semibold text-[#F4A261]">
              <span>七</span>
              <span>百</span>
              <span>転</span>
              <span>折</span>
              <span>八</span>
              <span>不</span>
              <span>起</span>
              <span>屈</span>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.25em] uppercase text-white/70 mb-12">
              FRONTEND DEVELOPER
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] mb-12">
              Build with passion, <br />
              Grow with <span className="text-[#F4A261]">persistence.</span>
            </h1>

            <hr className="w-8 mb-12" />

            <p className="text-sm md:text-base leading-relaxed text-white/80 mb-24">
              칠전팔기, 백절불굴 <br />
              넘어져도 다시 일어나, 더 나은 내일을 만든다.
            </p>

            <a
              href="/work"
              className="inline-flex items-center gap-3 text-sm tracking-wider"
            >
              VIEW MY WORK →
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 absolute left-1/2 bottom-10 -translate-x-1/2">
        <div className="relative h-11 w-6 rounded-full border border-white/80">
          <span className="absolute left-1/2 top-2 h-0.5 w-0.5 -translate-x-1/2 rounded-full bg-white/80"></span>

          <span className="absolute bottom-2 left-1/2 h-0.5 w-0.5 -translate-x-1/2 rounded-full bg-white/80"></span>
        </div>

        <span className="text-sm tracking-wide">SCROLL</span>
      </div>
    </section>
  );
}

export default Hero;
