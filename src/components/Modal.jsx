import { useState, useEffect } from "react";
import { fetchData } from "./fetch";
import "../style/modal.css";

export function Modal({ condition, handleClick, selectedCards }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchData(
      "https://api.giphy.com/v1/gifs/search?api_key=kT3HyyQuY5pTUCBr1Ah7fJL8um5IW1Vw&q=dragon+ball&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips",
      (data) => {
        setGifs(data.data);
      }
    );
  }, []);

  const won = condition === "won";
  const lost = condition === "lost";
  const menu = condition === "menu";

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="modal">
      <div className={`modal-content ${won || lost ? "end" : ""}`}>
        <div className="modal-header">
          <h1
            className={
              menu
                ? "modal-title menu"
                : won
                ? "modal-title won"
                : lost && "modal-title lost"
            }
          >
            {menu ? "Welcome" : won ? "Good Job!" : lost && "You lost"}
          </h1>
          <p className={`modal-small-text ${menu && "menu"}`}>
            {menu
              ? "Never click the same card twice"
              : won
              ? "You have great memory"
              : lost && "Nice try"}
          </p>
          {menu ? null : gifs.length > 0 ? (
            <img
              src={gifs[getRandomInt(25)].images.fixed_height_small.url}
              alt=""
            />
          ) : (
            "Loading..."
          )}
          {lost && (
            <p className="scored-count">You scored: {selectedCards.length}</p>
          )}
        </div>
        <div className="modal-buttons">
          <button onClick={handleClick}>
            {menu ? "Start Game" : won ? "Play Again" : lost && "Try again"}
          </button>
          <button>
            <a href="https://github.com/beMimg/memory-card">Git hub repo</a>
          </button>
        </div>
      </div>
    </div>
  );
}
