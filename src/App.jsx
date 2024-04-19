// import "./App.css";
import Expertise from "./Components/Expertise";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import Start from "./Components/Start";
import Team from "./Components/Team";
import CustomerCards from "./Components/Testimonial";

function App() {
  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
        <Header />
        <Hero />
        <Expertise />
        <Service />
        <CustomerCards />
        <Team />
        <Start />
        <Footer />
      </div>
    </>
  );
}

export default App;
