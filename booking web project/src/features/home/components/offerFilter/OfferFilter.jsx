import { useState } from "react";
import "./OfferFilter.css";

function OfferFilter() {
  const [selectedOffers, setSelectedOffers] = useState([]);

  const handleOfferChange = (offer) => {
    if (offer === "All") {
      setSelectedOffers(["All"]);
      return;
    }

    setSelectedOffers((prev) => {
      const withoutAll = prev.filter((item) => item !== "All");

      if (withoutAll.includes(offer)) {
        return withoutAll.filter((item) => item !== offer);
      }

      return [...withoutAll, offer];
    });
  };

  return (
    <div className="offer-filter">
      <label>
        <input
          type="radio"
          checked={selectedOffers.includes("All")}
          onChange={() => handleOfferChange("All")}
        />
        All
      </label>

      <label>
        <input
          type="radio"
          checked={selectedOffers.includes("Hotels")}
          onChange={() => handleOfferChange("Hotels")}
        />
        Hotels
      </label>

      <label>
        <input
          type="radio"
          checked={selectedOffers.includes("Flights")}
          onChange={() => handleOfferChange("Flights")}
        />
        Flights
      </label>

      <label>
        <input
          type="radio"
          checked={selectedOffers.includes("Multi")}
          onChange={() => handleOfferChange("Multi")}
        />
        Multi
      </label>
    </div>
  );
}

export default OfferFilter;