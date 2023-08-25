import "./App.css";
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <div className = 'App'>
      <NavBar />
      <Banner />
      <Pricing />
      <Contact />
      <div>rest of the site</div>
      <div>rest of the site</div>
      <div>rest of the site</div>
    </div>
  );
}
