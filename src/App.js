import {
  Navbar,
  Banner,
  Brands,
  Awards,
  Achievements,
  Projects,
  Skills,
  Contact,
  Services,
  Clients,
  Trends,
  Footer,
} from "./components";

import "./App.css";

function App() {
  return (
    <div className="App xl:max-w-screen-xl xl:fixed xl:left-0  xl:right-0 xl:top-0 xl:bottom-0 xl:overflow-auto xl:mx-auto">
      <Navbar />
      <Banner />
      <Brands />
      <Awards />
      <Achievements />
      <Projects />
      <Skills />
      <Contact />
      <Services />
      <Clients />
      <Trends />
      <Footer />
    </div>
  );
}

export default App;
