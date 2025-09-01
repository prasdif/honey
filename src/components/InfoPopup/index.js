import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import "./index.css";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="popup-container">
      {/* Trigger button */}
      <button className="popup-trigger" onClick={() => setIsOpen(true)}>
        <IoIosInformationCircleOutline className="info-icon" />
       What is UMF and MGO?
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-section">
              <p>
                <strong>UMF</strong> is the strength and purity rating of
                Manuka honey.
              </p>
              <div className="color-bars">
                <span className="color umf-10">10+</span>
                <span className="color umf-15">15+</span>
                <span className="color umf-20">20+</span>
                <span className="color umf-24">24+</span>
                <span className="color umf-26">26+</span>
                <span className="color umf-28">28+</span>
                <span className="color umf-30">30+</span>
              </div>
              <p className="popup-subtext">
                The higher the number, the greater the potency and rarity of
                Manuka honey.
              </p>
            </div>

            <div className="popup-section">
              <p>
                <strong>MGO</strong> is the key natural compound that gives
                Manuka honey its special antibacterial strength.
              </p>
              <div className="color-bars">
                <span className="color mgo-263">263+</span>
                <span className="color mgo-514">514+</span>
                <span className="color mgo-829">829+</span>
                <span className="color mgo-1122">1122+</span>
                <span className="color mgo-1282">1282+</span>
                <span className="color mgo-1450">1450+</span>
                <span className="color mgo-1620">1620+</span>
              </div>
              <p className="popup-subtext">
                The higher the number, the higher the antibacterial properties
                in the honey.
              </p>
            </div>

            <button className="popup-close" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
