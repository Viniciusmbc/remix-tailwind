import { Link, useLoaderData, json } from "remix";
import Countries from "~/components/Countries";
import Navbar from "~/components/Navbar";

export async function loader() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3"
  );

  const countries = json(await response.json());

  return countries;
}


export default function Index() {
  const countries = useLoaderData();

  return (
    <main className=" bg-slate-500 min-h-screen ">
    <Navbar/>
    <Countries data={countries}/>
    </main>
  );
}
