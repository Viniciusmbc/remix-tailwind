import { useLoaderData } from "remix";

export async function loader({ params }) {
  params.cca3 = params.cca3.toLowerCase();
  const countries = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.cca3}?fields=name,flags,population,region,subregion,capital,languages,tld,currencies,borders`
  );
  const country = await countries.json();

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${country.borders}`
  );

  const borders = await res.json();
  return {
    country,
    borders,
  };
}

export default function CountryDetails() {
  const { country, borders } = useLoaderData();
  return (
    <section className=" columns-2 mx-auto  max-w-screen-lg">
      <img
        src={country.flags.svg}
        className="w-full"
        alt={country.name.common}
      />
      <div>
        <h1>{country.name.common}</h1>
        <p>
          <b>Population:</b> {country.population}
        </p>
        <div>
          Borders:{" "}
          {borders.map((border) => (
            <div key={border.name.common}>
              <p>{border.name.common}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
