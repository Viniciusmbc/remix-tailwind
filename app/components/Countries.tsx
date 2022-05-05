import { Link } from "remix";
import { useState } from "react";

export default function Countries({ data }) {
  const [query, setQuery] = useState("");

  return (
<section className="max-w-screen-lg mx-auto">
<div className="flex border-2 rounded">
        <div className="flex items-center justify-center px-4 border-r">
            <svg className="w-6 h-6 bg-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                </path>
            </svg>
        </div>
        <input type="text" className="px-4 py-2 w-80" placeholder="Search..."/>
    </div>
  
            <article  className="grid grid-cols-4 mx-auto">
            {data.filter(({ name }) => {
          if (name === "") {
            return data;
          } else if (name.common.toLowerCase().includes(query.toLowerCase())) {
            return data;
          }
        }).map((country) => (
          <div
            key={country.name.common}
            className="mx-4 bg-slate-300 rounded-md"
          >
            <img
              className=" h-44 rounded-t-md shadow-lg shadow-slate-300" 
              src={country.flags.png}
              alt={country.name.common}
            />

            <Link to={`/country/${country.cca3.toLowerCase()}`}>
              <h2 className="text-2xl font-bold py-1 pl-3">{country.name.common}</h2>
            </Link>

            <p className=" pl-3 py-1">
              {" "}
              <b>Population:</b> {country.population}
            </p>
            <p className=" pl-3 py-1">
              <b>Region: </b> {country.region}
            </p>
            <p className=" pl-3 py-1">
              <b>Capital: </b> {country.capital}
            </p>
          </div>
        ))
        .splice(0, 8)}
            </article>
</section>
  );
}
