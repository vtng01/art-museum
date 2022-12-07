import { NavLink } from "react-router-dom";

export default function AllGalleries({ galleries }) {
  const listOfAllGalleries = {};
  let firstLetter;
  for (let gal of galleries) {
    firstLetter = gal.name[0].toUpperCase();
    if (listOfAllGalleries[firstLetter]) {
      listOfAllGalleries[firstLetter].push(gal.id);
    } else {
      listOfAllGalleries[firstLetter] = [gal.id];
    }
  }

  const keys = Object.keys(listOfAllGalleries);
  keys.sort();

  return (
    <section className="listOfAllGalleries">
      {keys.map((letter, i) => {
        return (
          <section className="listedView" key={i}>
            <h3>{letter}</h3>
            {listOfAllGalleries[letter].map((id, i) => {
              let gallery = galleries.find((gal, i) => gal.galleryid == id);
              return (
                <section key={id}>
                  <NavLink to={`/galleries/${id}`}>
                    <h4>{gallery?.name}</h4>
                  </NavLink>
                </section>
              );
            })}
          </section>
        );
      })}
    </section>
  );
}
