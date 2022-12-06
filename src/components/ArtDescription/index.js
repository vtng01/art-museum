import { Link, useParams } from "react-router-dom";

export default function ArtDescription({ gallery }) {
  const { galleryId, artId } = useParams();
  const art = gallery.objects.find((art) => art.id == artId);
  const description = art.description ? art.description : "N/A";
  const credit = art.credit ? art.credit : "N/A";
  const technique = art.technique ? art.technique : "N/A";

  console.log(art);
  return (
    <section>
      <h1>Art description</h1>
      <Link to={`/galleries/${galleryId}`}>
        Back to Gallery: {gallery.name}
      </Link>
      <p></p>
      <a href={art.url}>{art.title}</a>
      <p>Description: {description}</p>
      <p>Credit: {credit}</p>
      <p>Technique: {technique}</p>
      {art.images.map((img, i) => {
        return <img src={img.baseimageurl} key={img.imageid}></img>;
      })}
    </section>
  );
}
