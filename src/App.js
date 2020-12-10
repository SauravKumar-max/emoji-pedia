import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😉": "Winking Face",
  "😇": "Angle Face",
  "😑": "Expressionless Face",
  "😈": "Evil Face",
  "😫": "Tired Face",
  "😥": "Sad but Relieved Face",
  "😎": "Cool Face",
  "😪": "Sleepy Face",
  "☹️": "Frowning Face",
  "😕": "Confused Face",
  "😠": "Angry Face",
  "👺": "Goblin",
  "👻": "Ghost",
  "💂": "Guard",
  "😒": "Unamused Face",
  "👮": "Police Officer",
  "😤": "Face with Steam From Nose",
  "👸": "Princess",
  "😋": "Face Savoring Food",
  "👽": "Alien",
  "👏": "Clapping Hands",
  "😵": "Dizzy Face",
  "🎓": "Graduation Cap",
  "😛": "Playful Face",
  "😷": "Sick Face"
};

const emojiArray = Object.keys(emojiDictionary);
console.log(emojiArray);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Couldn't find in our Database!";
    }

    setMeaning(meaning);
  }

  function emojiMeaning(item) {
    var emoji = emojiDictionary[item];
    setMeaning(emoji);
  }

  return (
    <div className="App">
      <h1>EmojiPedia</h1>
      <input
        className="inputEl"
        placeholder="Enter your emoji..."
        onChange={emojiInputHandler}
      />
      <p className="meaning"> {meaning} </p>
      <p>Emojis we know</p>
      <div className="emojiBox">
        {emojiArray.map((item) => {
          return (
            <span
              key={item}
              onClick={() => emojiMeaning(item)}
              style={{
                fontSize: 2.3 + "rem",
                cursor: "pointer",
                margin: 1 + "rem"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
