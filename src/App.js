import Navbar from "./component/Navbar/navbar";
import Intro from "./component/Intro/intro";
import Skills from "./component/Skills/skills";
import Social from "./component/Social/social";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
        <Social/>
        <Contact/>
        <Footer/>
    </div>
  );
};

export default App;
