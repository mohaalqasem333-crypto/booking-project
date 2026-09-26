import React from "react";
import "./GalleryGrid.css";
import Image from "../../../../assets/images/homeImage.jpg";


function GalleryGrid() {
  return (
<div className="gallery-grid">

   
      <div className="gallery-row top-row">

        <div className="gallery-item">
          <img src={Image} alt="Gallery" />
          <a href="#" className="deals-btn">
            Deals Discover <span className="arrow">→</span>
          </a>
        </div>

        <div className="gallery-item">
          <img src={Image} alt="Gallery" />
          <a href="#" className="deals-btn">
            Deals Discover <span className="arrow">→</span>
          </a>
        </div>

        <div className="gallery-item">
          <img src={Image} alt="Gallery" />
          <a href="#" className="deals-btn">
            Deals Discover <span className="arrow">→</span>
          </a>
        </div>

      </div>


      <div className="gallery-row bottom-row">

        <div className="gallery-item">
          <img src={Image} alt="Gallery" />
          <a href="#" className="deals-btn">
            Deals Discover <span className="arrow">→</span>
          </a>
        </div>

        <div className="gallery-item">
          <img src={Image} alt="Gallery" />
          <a href="#" className="deals-btn">
            Deals Discover <span className="arrow">→</span>
          </a>
        </div>

        <div className="gallery-item">
          <img src={Image} alt="Gallery" />
          <a href="#" className="deals-btn">
            Deals Discover <span className="arrow">→</span>
          </a>
        </div>

      </div>

    </div>
  );
}
export default GalleryGrid;
