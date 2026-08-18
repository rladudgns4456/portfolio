function Hero() {
  return (
    <section
      className="min-h-screen relative flex flex-col items-center justify-center text-white
      bg-[radial-gradient(circle_at_80%_55%,#F4A261_0%,transparent_70%),linear-gradient(to_right,#020617,#0B1F3A,#164E8A,#7C3F63,#C45A4A,#F4A261)]"
    >
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.25em] uppercase text-white/70">
            FRONTEND DEVELOPER
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Build with passion, <br />
            Grow with <span className="text-[#F4A261]">persistence.</span>
          </h1>
          <hr className="w-8" />
          <p className="text-sm md:text-base leading-relaxed text-white/80">
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span>SCROLL</span>
      </div>
    </section>
  );
}

export default Hero;
