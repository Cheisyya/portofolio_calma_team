import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="mesh-backdrop" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Team />
      </main>
      <Footer />
    </>
  );
}
