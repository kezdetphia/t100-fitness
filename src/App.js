import "./App.css";
import NavBar from './Pages/NavBar'
import Banner from './Pages/Banner'
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import AboutUs from './Pages/AboutUs'
import CarouselNav from'./components/CarouselNav'
import Carousel from './components/Carousel'  
import ContactUs from './Pages/ContactUs'  

export default function App() {
  return (
    <div className = 'App'>
      <NavBar />
      <Banner />
      <Services />
      < AboutUs />
      {/* <Contact /> */}
      <ContactUs/>
      <CarouselNav/>
    
      
      <div>rest of the site</div>
      <div>rest of the site</div>
      <div>rest of the site</div>
    </div>
  );
}
