import { Link } from "react-router-dom";

export default function ArtImageTile({ art, galleryId }) {
  return (
    <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={art.images[0]?.baseimageurl}></img>
    </Link>
  );
}
