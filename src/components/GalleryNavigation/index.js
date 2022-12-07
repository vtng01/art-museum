import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

export default function GalleryNavigation({ galleries }) {
  return (
    <>
      <h1>The Harvard Art Museum</h1>
      <nav className="nav-bar">
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/all-galleries">All Galleries</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="search-page">Search</NavLink>
          </li>
        </ul>
        {/* {galleries.map((gallery, i) => {
          return (
            <NavLink
              to={`/galleries/${gallery.galleryid}`}
              key={gallery.galleryid}
            >
              {gallery.name}
            </NavLink>
          );
        })} */}
      </nav>
    </>
  );
}
