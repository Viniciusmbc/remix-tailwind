import { Link } from "remix";
import { useState } from "react";

export default function Countries({ data }) {
  const [query, setQuery] = useState("");

  return (
    <section className="max-w-screen-lg mx-auto">
      <form>
        <div className="flex items-center bg-white  border-2 mx-4 border-cyan-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            name="name"
            placeholder="Search for a country..."
            className="w-1/3 py-2  outline-none"
          />
        </div>
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Dropdown button{" "}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <div
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <div
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </div>
            </li>
          </ul>
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
              className="mx-4 bg-slate-300 rounded-md"
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
