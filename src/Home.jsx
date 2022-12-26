import axios from "axios";
import { useState, useEffect } from "react";
import { BreweriesIndex } from "./BreweriesIndex";
import { BreweriesShow } from "./BreweriesShow";
import { Modal } from "./Modal";

export function Home() {
  const [breweries, setBreweries] = useState([]);
  const [isBreweriesShowVisible, setIsBreweriesShowVisible] = useState(false);
  const [currentBrewery, setCurrentBrewery] = useState({});

  const handleIndexBreweries = () => {
    console.log("handleIndexBreweries");
    axios.get("http://localhost:3000/breweries.json").then((response) => {
      console.log(response.data);
      setBreweries(response.data);
    });
  };

  const handleShowBrewery = (brewery) => {
    console.log("handleShowBrewery", brewery);
    setIsBreweriesShowVisible(true);
    setCurrentBrewery(brewery);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsBreweriesShowVisible(false);
  };

  useEffect(handleIndexBreweries, []);
  return (
    <div>
      <BreweriesIndex breweries={breweries} onShowBrewery={handleShowBrewery} />
      <Modal show={isBreweriesShowVisible} onClose={handleClose}>
        <BreweriesShow brewery={currentBrewery} />
      </Modal>
    </div>
  );
}
