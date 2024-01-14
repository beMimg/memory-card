import "../style/card.css";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";

export function Card({ character, handleClick }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Tilt className={`tilt ${show ? "show" : ""}`}>
      <div className="card" onClick={() => handleClick(character.id)}>
        <div className="card-img-container">
          <img
            className="card-img"
            src={character.image}
            alt="charater image"
          />
        </div>
        <div className="card-content">
          <div className="card-header">
            <p className="card-header-item-left">{character.race}</p>
            <p className="card-header-item-right">{character.ki}</p>
          </div>
          <div className="card-title-container">
            <h1 className="card-title">{character.name}</h1>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
