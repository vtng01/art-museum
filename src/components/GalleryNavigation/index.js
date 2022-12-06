import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

export default function GalleryNavigation({ galleries }) {
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {galleries.map((gallery, i) => {
        return (
          <NavLink
            to={`/galleries/${gallery.galleryid}`}
            key={gallery.galleryid}
          >
            {gallery.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
