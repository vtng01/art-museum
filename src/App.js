import logo from "./logo.svg";
import "./App.css";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route, Switch } from "react-router-dom";
import GalleryPreview from "./components/GalleryPreview";
import AllGalleries from "./components/AllGalleries";

function App() {
  return (
    <section className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />

      <Switch>
        <Route path="/" exact>
          <GalleryPreview galleries={harvardArt.records} />
        </Route>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route path="/all-galleries">
          <AllGalleries galleries={harvardArt.records} />
        </Route>
        <Route path="search-page">
          <h2>Search Page</h2>
        </Route>
        <Route path="/page-not-found">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </section>
  );
}

export default App;
