import React, { useEffect, useState } from "react";
import api from "../../../../api/api";
import "./Cards.css";

function Cards() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await api.get("/properties");

        setProperties(response.data.properties);
      } catch (error) {
        console.error("Failed to get properties:", error);
      }
    };

    getProperties();
  }, []);

  return (
    <div className="cards">
      {properties.slice(0, 12).map((property) => (
        <div className="card" key={property._id}>
          <div className="card-image">
            <img
              src={`http://localhost:5000${property.images[0]}`}
              alt={property.name}
            />
          </div>

          <div className="card-detiles">
            <p className="title">{property.name}</p>

            <p className="side">{property.location}</p>

            <p className="Date">
              ${property.price} / night
            </p>

            <p className="discription">
              {property.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;