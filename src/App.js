import "./App.css";
import NavBar from './components/Pages/NavBar'
import Banner from './components/Pages/Banner'
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import CarouselNav from'./components/CarouselNav'
import AboutUs from './components/Pages/AboutUs'
import Carousel from './components/Carousel'  
import ContactUs from './components/Pages/ContactUs'  

export default function App() {
  return (
    <div className = 'App'>
      <NavBar />
      <Banner />
      <Services />
      < AboutUs />
      <Contact />
      <ContactUs/>
      <CarouselNav/>
    
      
      <div>rest of the site</div>
      <div>rest of the site</div>
      <div>rest of the site</div>
    </div>
  );
}
