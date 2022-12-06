import { useParams } from "react-router-dom";
import harvardArt from "../../data/harvardArt";

export default function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const gallery = galleries.find((gal, i) => gal.galleryid == galleryId);
  return (
    <section>
      <h1>Gallery View</h1>
      <h2>{gallery.name}</h2>
    </section>
  );
}
