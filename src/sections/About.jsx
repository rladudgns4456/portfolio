function About() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col justify-center text-black/80 bg-[#f0b98c] "
    >
      <div
        className="w-full max-w-7xl px-6 md:px-12 lg:px-20 
        grid grid-cols-[80px_1px_1fr] gap-8 mb-12"
      >
        <div>
          <h2 className="text-2xl font-bold">ABOUT ME</h2>
        </div>

        <div className="bg-black/80"></div>

        <div>
          <p className="text-3xl font-semibold mb-8">
            꾸준히 성장하는 <br />
            프론트엔드 개발자입니다.
          </p>

          <hr className=" w-8 mb-12" />

          <p className="text-1xl font-semibold">
            새로운 기술을 배우고, 직접 만들고, 해결하는 과정을 즐깁니다.
            <br />
            사용자 경험을 고민하여, 가볍고 아름다운 웹을 만들고자 합니다. <br />
            운동처럼 꾸준히, 마법처럼 창의적으로.
          </p>

          <div className="mt-12">
            <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
              MORE ABOUT ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
