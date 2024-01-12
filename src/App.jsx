import { useEffect, useState } from "react";
import { fetchData } from "./fetch";
import { Card } from "./Card";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    fetchData("https://dragonball-api.com/api/characters", setCharacters);
  }, []);

  console.log(characters);

  function handleSelectedCard(id) {
    if (selectedCards.includes(id)) {
      console.log("over");
      setSelectedCards([]);
      return;
    }
    setSelectedCards((previousCard) => {
      return [...previousCard, id];
    });
  }

  if (selectedCards.length > highestScore) {
    setHighestScore(selectedCards.length);
  }

  return (
    <>
      <header>
        <h1 className="header-title">Memory Card Game</h1>
        <div className="header-content">
          <p>Best Score: {highestScore}</p>
          <p>Current Score: {selectedCards.length}</p>
        </div>
      </header>
      <main>
        {characters.length > 0 ? (
          characters.map((character) => (
            <Card
              key={character.id}
              character={character}
              handleClick={handleSelectedCard}
            ></Card>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}

export default App;
