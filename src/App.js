import logo from "./logo.svg";
import "./App.css";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route } from "react-router-dom";

function App() {
  return (
    <section className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path="/galleries/:galleryId">
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </section>
  );
}

export default App;
