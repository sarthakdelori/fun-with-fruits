import { useState } from "react";
import "./styles.css";

var foodDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry"
};

var foodpedia = Object.keys(foodDictionary);

export default function App() {
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState("Meaning displayed here...");

  function inputHandler(e) {
    var inputEmoji = e.target.value;
    setInput(inputEmoji);

    if (foodDictionary[inputEmoji] === undefined) {
      setMeaning("No output for this");
    } else {
      setMeaning(foodDictionary[inputEmoji]);
    }
  }

  function clickHandler(emoji) {
    setMeaning(foodDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Funn with Fruits!!</h1>
      <input onChange={inputHandler}></input>
      <h2> {input} </h2>
      <h3> {meaning} </h3>

      {foodpedia.map((emoji) => {
        return (
          <span key={emoji} onClick={() => clickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
