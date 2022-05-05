import { Link } from "remix";

export default function Countries({ data }) {
  return (
    <section className=" max-w-screen-lg grid grid-cols-4 mx-auto">
      {data
        .map((country) => (
          <div
            key={country.name.common}
            className="m-4 bg-slate-300 rounded-md"
          >
            <img
              className=" h-44"
              src={country.flags.png}
              alt={country.name.common}
            />

            <Link to={`/country/${country.cca3.toLowerCase()}`}>
              <h2 className="text-2xl font-bold">{country.name.common}</h2>
            </Link>

            <p>
              {" "}
              <b>Population:</b> {country.population}
            </p>
            <p>
              <b>Region: </b> {country.region}
            </p>
            <p>
              <b>Capital: </b> {country.capital}
            </p>
          </div>
        ))
        .splice(0, 8)}
    </section>
  );
}
