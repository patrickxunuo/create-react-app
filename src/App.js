import './App.css';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import HappyCustomers from "./components/HappyCustomers"
import Advantage from "./components/Advantage";
import Map from "./components/Map"
import DataSection from "./components/DataSection";
import Companies from "./components/Companies";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <section className='section-1'>
                <Header/>
                <Dashboard/>
            </section>
            <section className="section-2">
                <HappyCustomers/>
            </section>
            <section className="section-3">
                <Advantage/>
            </section>
            <section className="section-4">
                <Map/>
            </section>
            <section className="section-5">
                <DataSection/>
            </section>
            <section className="section-6">
                <Companies/>
            </section>
            <section className="section-7">
                <Signup/>
            </section>
            <section className="section-8">
                <Footer />
            </section>
        </div>
    );
}

export default App;
