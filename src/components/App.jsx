import { useEffect, useState } from "react";
import { fetchData } from "./fetch";
import { Card } from "./Card";
import { Modal } from "./Modal";
import "../style/app.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [highestScore, setHighestScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("menu");

  const statusIsMenu = gameStatus === "menu";
  const statusIsGame = gameStatus === "game";
  const statusIsLost = gameStatus === "lost";
  const statusIsWon = gameStatus === "won";

  useEffect(() => {
    fetchData("https://dragonball-api.com/api/characters", setCharacters);
  }, []);

  function handleSelectedCard(id) {
    if (selectedCards.includes(id)) {
      setGameStatus("lost");
      return;
    }
    setSelectedCards((previousCard) => {
      return [...previousCard, id];
    });
    setCharacters(shuffle(characters));
    console.log(characters.length);

    if (selectedCards.length + 1 === characters.length) {
      setGameStatus("won");
    }
  }

  if (selectedCards.length > highestScore) {
    setHighestScore(selectedCards.length);
  }

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  function handleRepeatGame() {
    setGameStatus("game");
    setSelectedCards([]);
  }

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
          <Modal
            condition={"menu"}
            handleClick={() => handleRepeatGame()}
          ></Modal>
        )}
        {statusIsLost && (
          <Modal
            condition={"lost"}
            handleClick={() => handleRepeatGame()}
          ></Modal>
        )}
        {statusIsWon && (
          <Modal
            condition={"won"}
            handleClick={() => handleRepeatGame()}
          ></Modal>
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
