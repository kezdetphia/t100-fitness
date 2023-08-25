import "./App.css";
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import NavBar2 from "./components/NavBar2";

export default function App() {
  return (
    <div className = 'App'>
      <NavBar2/>
      {/* <NavBar /> */}
      <Banner />
      <Pricing />
      <Contact />
      <div>rest of the site</div>
      <div>rest of the site</div>
      <div>rest of the site</div>
    </div>
  );
}
