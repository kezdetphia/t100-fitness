import "./App.css";
import NavBar from './components/Pages/NavBar'
import Banner from './components/Pages/Banner'
import Contact from "./components/Pages/Contact";
import Pricing from "./components/Pages/Pricing";

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
