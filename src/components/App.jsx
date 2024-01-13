import { useEffect, useState } from "react";
import { fetchData } from "./fetch";
import { Card } from "./Card";
import { StartGameModal } from "./StartGame";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [highestScore, setHighestScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("menu");

  const statusIsMenu = gameStatus === "menu";
  const statusIsGame = gameStatus === "game";

  useEffect(() => {
    fetchData("https://dragonball-api.com/api/characters", setCharacters);
  }, []);

  function handleSelectedCard(id) {
    if (selectedCards.includes(id)) {
      console.log("over");
      setSelectedCards([]);
      return;
    }
    setSelectedCards((previousCard) => {
      return [...previousCard, id];
    });
    setCharacters(shuffle(characters));
  }

  if (selectedCards.length > highestScore) {
    setHighestScore(selectedCards.length);
  }

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <div className="bg"></div>
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
      <main>
        {statusIsMenu && (
          <StartGameModal
            handleStart={() => setGameStatus("game")}
          ></StartGameModal>
        )}
        {characters.length > 0 && statusIsGame ? (
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
