import Banners from "./components/Banners";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import TrialBanner from "./components/TrialBanner";

function App() {
  return (
    <>
      <header className="bg-black-600">
        <Navbar />
      </header>
      <main>
        <div className="bg-black-600">
          <section>
            <Hero />
            <Banners />
          </section>
        </div>

        <section className="relative">
          <div className="top-0 bg-black-600 mix-backgrounds" />
          <div className="bottom-0 bg-white mix-backgrounds" />
          <Slider />
        </section>

        <div className="relative">
          {" "}
          <div className="bg-white-100 m-auto pb-22.25">
            <Testimonials />
            <div className="bg-gray-300 w-full h-px mt-6.25"></div>
          </div>
          <section className="relative">
            <div className="top-0 mix-backgrounds bg-white " />

            <TrialBanner />
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
