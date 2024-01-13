import "../style/start-game-modal.css";

export function StartGameModal({ handleStart }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Welcome</h1>
          <p>Test your memory</p>
        </div>
        <div className="modal-buttons">
          <button onClick={handleStart}>Start Game</button>
          <button>Git Hub Repo</button>
        </div>
      </div>
    </div>
  );
}
