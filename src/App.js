import logo from "./logo.svg";
import "./App.css";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <section className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route path="/" exact>
          <h2>Harvard Art Museum</h2>
          <p>
            Please select the Gallery you wish you see on the navigation bar
          </p>
        </Route>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route path="/page-not-found">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </section>
  );
}

export default App;
