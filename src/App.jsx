import { useState } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";

const diceComponents = [
  <Dice1 key="1" className="size-12" />,
  <Dice2 key="2" className="size-12" />,
  <Dice3 key="3" className="size-12" />,
  <Dice4 key="4" className="size-12" />,
  <Dice5 key="5" className="size-12" />,
  <Dice6 key="6" className="size-12" />,
];

const getRandomDice = () => Math.floor(Math.random() * 6) + 1;

function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const rollDices = () => {
    const newDice1 = getRandomDice();
    const newDice2 = getRandomDice();
    setDice1(newDice1);
    setDice2(newDice2);

    const sum = newDice1 + newDice2;

    if (sum === 7 || sum === 11) {
      setWins((prevWins) => prevWins + 1);
    } else {
      setLosses((prevLosses) => prevLosses + 1);
    }
  };

  const totalGames = wins + losses;
  const winPercentage =
    totalGames === 0 ? 0 : ((wins / totalGames) * 100).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-8">
      <h1 className="text-4xl font-bold">Role os dados</h1>
      <div className="flex space-x-4 text-6xl">
        <div>{diceComponents[dice1 - 1]}</div>
        <div>{diceComponents[dice2 - 1]}</div>
      </div>
      <button
        onClick={rollDices}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Rolar
      </button>
      <div>
        {dice1 + dice2 === 7 || dice1 + dice2 === 11 ? (
          <p className="text-green-600 text-2xl">Você venceu!</p>
        ) : (
          <p className="text-red-600 text-2xl">Você perdeu</p>
        )}
      </div>
      <div className="text-lg">
        <p>Jogadas: {totalGames}</p>
        <p>Vitórias: {wins}</p>
        <p>Derrotas: {losses}</p>
        <p>Percentual de vitória: {winPercentage}%</p>
      </div>
    </div>
  );
}

export default App;
