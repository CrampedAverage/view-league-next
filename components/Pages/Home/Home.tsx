"use client";
import PlayerSearch from "./PlayerSearch";
import RegionModal from "../../Modals/RegionModal";
import useRegion from "../../../hooks/useRegion";
import useModal from "../../../hooks/useModal";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { regions } from "../../../utils/commonData";

const Home = () => {
  const [showRegionModal, setShowRegionModal] = useModal(false);
  const [region, setRegion] = useRegion("euw");

  const openModal = (open: boolean): void => {
    setShowRegionModal(open);
  };

  const closeModal = (region?: string): void => {
    if (region) setRegion(region);
    setShowRegionModal(false);
  };

  useEffect(() => {
    Cookies.set("region", regions[region].value);
  }, [region]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
      <PlayerSearch openModal={openModal} region={region} />
      {showRegionModal && (
        <RegionModal closeModal={closeModal} region={region} />
      )}
    </div>
  );
};

export default Home;
