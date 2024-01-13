import "../style/modal.css";

export function Modal({ condition, handleClick }) {
  const won = condition === "won";
  const lost = condition === "lost";
  const menu = condition === "menu";

  return (
    <div className="modal">
      <div className="modal-content">
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
          <p className="modal-small-text">
            {menu
              ? "Test your memory"
              : won
              ? "You have great memory"
              : lost && "Nice try"}
          </p>
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
