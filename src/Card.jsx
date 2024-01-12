export function Card({ character }) {
  console.log(character);
  return (
    <div className="card">
      <img className="card-img" src={character.image} alt="charater image" />
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
