function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20">
        <p className="text-sm tracking-[0.25em] uppercase">
          FRONTEND DEVELOPER
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Build with passion, <br />
          Grow with <span>persistence.</span>
        </h1>
        <hr className="w-8" />
        <p className="text-sm md:text-base leading-relaxed">
          칠전팔기, 백절불굴 <br />
          넘어져도 다시 일어나, 더 나은 내일을 만든다.
        </p>
        <a
          href="/work"
          className="inline-flex items-center gap-3 text-sm tracking-wider"
        >
          VIEW MY WORK
        </a>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span>SCROLL</span>
      </div>
    </section>
  );
}

export default Hero;
