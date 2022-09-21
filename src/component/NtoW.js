import React from "react";
import { useState } from "react";
function NtoW() {
  let units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thierteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tys = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninty",
  ];
  let hundredon = [
    "",
    "",
    "thousand",
    "lakh",
    "crore",
    "arab",
    "kharab",
    "sankh",
    "mhasankh",
  ];
  const [inwords, setInwords] = useState("");
  const inputHandler = (event) => {
    let inp = event.target.value;
    if (inp === "") {
      setInwords("");
      return;
    }
    // if(Number(inp)==0){
    //     inp =''
    // }
    var arr = [];
    let remain = inp.length - 3;
    let toloop = Math.floor(remain / 2);
    if (Number(remain) % 2 === 0 && toloop > 0) {
      let j = 0;
      for (var i = 0; i < toloop; i++) {
        arr = [...arr, inp.substring(j, j + 2)];
        j = j + 2;
      }
    } else if (toloop > 0 || inp.length == 4) {
      arr = [inp[0]];
      let j = 1;
      for (i = 0; i < toloop; i++) {
        arr = [...arr, inp.substring(j, j + 2)];
        j = j + 2;
      }
    }
    arr = [...arr, inp.substring(remain, inp.length)];
    // console.log(arr)
    var fln = "";
    for (let i = 0; i < arr.length; i++) {
      fln = fln + " " + print(arr[i]) + " " + hundredon[arr.length - i];
    }
    console.log(fln);
    setInwords(fln);

    // const numWords = require('num-words')
    // setInwords(numWords(inp))
  };
  var print = (inp) => {
    if (Number(inp) < 20) {
      let text = units[inp];
      return text;
    } else if (Number(inp) < 100) {
      let ten = Math.floor(Number(inp) / 10);
      let ones = Number(inp) % 10;
      let text = tys[ten] + " " + units[ones];
      // setInwords(text)
      return text;
    } else if (Number(inp) < 1000) {
      let hundred = Math.floor(Number(inp) / 100);
      let ten = Number(inp) % 100;
      let ones = Number(ten) % 10;
      ten = Math.floor(ten / 10);
      let text =
        units[hundred] + " " + "hundred" + " " + tys[ten] + " " + units[ones];
      // setInwords(text)
      return text;
    }
  };
  return (
    <div>
      <h1>5. Number to words</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <span style={{ fonySize: "1.2rem" }}>Please enter a number:</span>
        <input
          style={{ fontSize: "1.4rem",width:'12rem' }}
          type="number"
          onChange={inputHandler}
        />
        <p style={{fontSize:'1.2rem'}}>{inwords}</p>
      </div>
    </div>
  );
}

export default NtoW;
