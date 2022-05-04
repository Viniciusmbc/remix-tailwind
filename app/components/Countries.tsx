import { Link } from "remix";

export default function Countries({ data }) {
  return (
    <section className="grid grid-cols-4 gap-10 max-w-screen-lg mx-auto py-4">
      {data
        .map((country) => (
          <div
            key={country.name.common}
            className=" rounded-md border-solid border-2 border-sky-500 bg-slate-100"
          >
            <img
              className=" w-full object-fill overflow-visible"
              src={country.flags.svg}
              alt={country.name.common}
            />
            <Link to={`/country/${country.cca3.toLowerCase()}`}>
              <h2 className="text-2xl font-bold text-center">
                {country.name.common}
              </h2>
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
