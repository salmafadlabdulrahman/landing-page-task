import Banners from "./components/Banners";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";

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

        <div className=" relative bg-black-600">
          <div className="">
            <Slider />
          </div>

          <div className="bg-white-100 m-auto border border-indigo-500 ">
            <Testimonials />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
