import "../style/card.css";

export function Card({ character, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(character.id)}>
      <div className="card-img-container">
        <img className="card-img" src={character.image} alt="charater image" />
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
  );
}
