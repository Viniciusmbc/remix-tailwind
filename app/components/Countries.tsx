import { Link } from "remix";
import { useState } from "react";

export default function Countries({ data }) {
  const [query, setQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="max-w-screen-lg mx-auto">
      <form className="flex justify-between py-8">
        <div className="flex items-center bg-white  border-2 mx-4 border-cyan-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            name="name"
            placeholder="Search for a country..."
            className="py-2  outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>

      <article className="grid grid-cols-4 mx-auto">
        {data
          .filter(({ name }) => {
            if (name === "") {
              return data;
            } else if (
              name.common.toLowerCase().includes(query.toLowerCase())
            ) {
              return data;
            }
          })
          .map((country) => (
            <div
              key={country.name.common}
              className="mx-4 mb-10 bg-slate-300 rounded-md"
            >
              <img
                className=" h-44 rounded-t-md shadow-lg shadow-slate-300"
                src={country.flags.png}
                alt={country.name.common}
              />

              <Link to={`/country/${country.cca3.toLowerCase()}`}>
                <h2 className="text-2xl font-bold py-1 pl-3">
                  {country.name.common}
                </h2>
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
