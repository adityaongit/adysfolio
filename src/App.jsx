import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/hero";
function App() {
    return (
        <div className="sm:mx-26 mx-6 md:mx-24 lg:mx-[250px]">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
}

export default App;
