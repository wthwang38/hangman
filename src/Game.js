import React, {useState} from "react";

function Game(){
//container for the hangman
//array of words the problem
//letters
    const word = "HANGMAN".toUpperCase();
    const alphabets = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]
    const [correctGuess, setCorrectGuess] = useState([]);

    const maskedWord = word.split("").map(letter => correctGuess.includes(letter) ? letter : "_").join(" ")

    
    return(
        <div>
            <p>
                {maskedWord}
            </p>

           <div>
            Pick an alphabet
            {alphabets.map((alphabet, index)=>
            <button 
            key={index}
            onClick={()=>{
                if(word.includes(alphabet)){
                    setCorrectGuess([...correctGuess, alphabet])
                }
            }}
            > {alphabet}</button>
            )}
            </div> 
        </div>
    )
}
export default Game;
