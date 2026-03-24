import { useLoaderData } from "react-router-dom"
import Banner from "./components/Banner"
import State from "./components/State"
import TopApps from "./components/TopApps";

function Home() {

  const apps = useLoaderData();

  return (
    <>
      <Banner/>
      <State/>
      <TopApps apps={apps}/>
    </>
  )
}

export default Home
