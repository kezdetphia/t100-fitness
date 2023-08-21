import "./App.css";
import NavBar from "./components/NavBar";
import Banner from './components/Banner'

export default function App() {
  return (
    <h1 className = 'App'>
      <NavBar />
      <Banner />
      Hello world!
    </h1>
  );
}
