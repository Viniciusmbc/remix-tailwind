import { Link, useLoaderData, json } from "remix";
import Countries from "~/components/Countries";
import { useContext, useState } from "react";
import { ThemeContext } from "~/components/context/ThemeContext";

export async function loader() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3"
  );

  const countries = json(await response.json());

  return countries;
}


export default function Index() {
  const { theme } = useContext(ThemeContext);
  const countries = useLoaderData();

  return (
    <main className={`${theme === "light" ? " bg-slate-400" : " bg-gray-800" }`}>
    <Countries data={countries}/>
    </main>
  );
}
