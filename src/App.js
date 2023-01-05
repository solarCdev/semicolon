import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Nav } from "./components/Nav";
import Home from "./Home";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <Nav /> */}
      <Home />
      <Footer />
    </div>
  );
}
