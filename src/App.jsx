import Banners from "./components/Banners";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Hero />
          <Banners />
        </section>

        <div className=" relative">
          <div className="">
            <Slider />
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis libero tenetur ex ipsum doloremque dolores voluptatem
            magnam harum laudantium quas, aperiam deleniti quos eveniet totam
            sunt praesentium aut nihil corporis officia! Ducimus temporibus
            dolor cupiditate delectus suscipit porro fugit rerum consequatur quo
            deserunt quod corporis, iste, eius est iure amet.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
