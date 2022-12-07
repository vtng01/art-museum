import { Link, Route } from "react-router-dom";
import "./ArtImageTile.css";

export default function ArtImageTile({ art, galleryId }) {
  return (
    <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={art.images[0]?.baseimageurl} className="art-img"></img>
    </Link>
  );
}
