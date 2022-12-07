import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SearchPage.css";
export default function SearchPage({ galleries }) {
  const [galleriesFound, setGalleriesFound] = useState([]);
  const [query, setQuery] = useState();
  const [result, setResult] = useState();

  return (
    <section className="galleries-found">
      <input
        onChange={(event) => {
          setQuery(event.target.value);
          setGalleriesFound(
            galleries.filter((e) =>
              e.name.toLowerCase().includes(query?.toLowerCase())
            )
          );
        }}
        placeholder="search here"
      ></input>

      {galleriesFound?.map((e, i) => {
        return (
          <NavLink to={`/galleries/${e.id}`}>
            <h3>{e.name}</h3>
          </NavLink>
        );
      })}
    </section>
  );
}
