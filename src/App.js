import "./App.css";
import Landing from "./components/landing";
import Testinomials from "./components/testimonials";
import Business from "./components/business";
import Navigation from "./components/Navigation";
import Sponsors from "./components/sponsors";
import Features from "./components/features";
import Lookout from "./components/lookout";
import Demo from "./components/demo";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div><Navigation/></div>
      <div>
        <Landing />
        <Sponsors/>
        <Testinomials />
        <Business />
        <Features/>
        <Lookout/>
        <Demo/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
