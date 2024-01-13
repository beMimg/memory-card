import { useState } from "react";

export function Header({ highestScore, selectedCards }) {
  return (
    <header>
      <div className="header-title">
        <p>Memory</p>
        <p className="red">Card</p>
      </div>
      <div className="header-content">
        <p>Best Score: {highestScore}</p>
        <p>Current Score: {selectedCards.length}</p>
      </div>
    </header>
  );
}
