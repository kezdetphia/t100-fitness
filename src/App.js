import "./App.css";
import NavBar from "./Pages/NavBar";
import Banner from "./Pages/Banner";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Aboutme from "./Pages/Aboutme";



export default function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <ContactUs />
      {/* < AboutUs /> */}
      <Aboutme />


      <div>rest of the site</div>
      <div>rest of the site</div>
    </div>
  );
}
