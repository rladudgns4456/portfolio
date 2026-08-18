function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-[#F4A261]">
      <nav className="text-black/80">
        <div className="mx-auto w-full px-6 py-5 md:px-12 lg:px-20">
          <div className="grid grid-cols-[80px_1fr] gap-8">
            {/* Logo */}
            <div className="flex justify-center">
              <a href="/" className="text-3xl italic">
                Kim Yeonghoon
              </a>
            </div>

            {/* Navigation */}
            <ul className="flex justify-end gap-6 text-2xl tracking-wide">
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#projects">PROJECTS</a>
              </li>
              <li>
                <a href="#journey">JOURNEY</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
