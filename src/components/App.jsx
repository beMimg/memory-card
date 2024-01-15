import { useEffect, useState } from "react";
import { fetchData } from "./fetch";
import { Card } from "./Card";
import { Modal } from "./Modal";
import { Header } from "./Header";
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
    fetchData("https://dragonball-api.com/api/characters", (data) => {
      setCharacters(data.items);
    });
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
      <Header
        highestScore={highestScore}
        selectedCards={selectedCards}
      ></Header>
      <main>
        {statusIsMenu && (
          <Modal
            condition={"menu"}
            selectedCards={selectedCards}
            handleClick={() => handleRepeatGame()}
          ></Modal>
        )}
        {statusIsLost && (
          <Modal
            condition={"lost"}
            selectedCards={selectedCards}
            handleClick={() => handleRepeatGame()}
          ></Modal>
        )}
        {statusIsWon && (
          <Modal
            condition={"won"}
            selectedCards={selectedCards}
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
