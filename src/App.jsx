import Hero from "./sections/Hero";
import Header from "./components/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="grid grid-cols-[1fr_1px_1fr]">
        <About />
        <div className="bg-black/80"></div>
        <Skills />
      </div>
    </>
  );
}

export default App;
