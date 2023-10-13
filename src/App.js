import "./App.css";
import NavBar from "./Pages/NavBar";
import Banner from "./Pages/Banner";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Aboutme from "./Pages/Aboutme";
import Footer from "./Pages/Footer";
import YoutubePage from "./Pages/YoutubePage";
import BeforeAfter from "./Pages/BeforeAfter";


export default function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Aboutme />
      <Services />
      <ContactUs />
      <Footer />
      <BeforeAfter />
      {/* <YoutubePage /> */}

      <div>rest of the site</div>
      <div>rest of the site</div>
    </div>
  );
}
