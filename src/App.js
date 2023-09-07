import "./App.css";
import NavBar from './components/Pages/NavBar'
import Banner from './components/Pages/Banner'
import Banner2 from './components/Pages/Banner2'
import Contact from "./components/Pages/Contact";
import Pricing from "./components/Pages/Pricing";
import CarouselNav from'./components/CarouselNav'

export default function App() {
  return (
    <div className = 'App'>
      <NavBar />
      <Banner2 />
      <Pricing />
      <Contact />
      <CarouselNav/>
      
      <div>rest of the site</div>
      <div>rest of the site</div>
      <div>rest of the site</div>
    </div>
  );
}
