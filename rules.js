ruleset={
  scopes: ["main","global","outside","lines","other","neighbours"],
  rules:[
    {
      "id"    : "anti-king",
      "title" : "anti-king",
      "scope" : "global",
			"symbol": "♔",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits separated by a chess 𝗸𝗶𝗻𝗴's move are different.",
        "html" : "<li>Digits separated by a chess <b>king</b>'s move are different.</li>"
      }]
    },{
      "id"    : "anti-knight",
      "title" : "anti-knight",
      "scope" : "global",
			"symbol": "♞",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits separated by a chess 𝗸𝗻𝗶𝗴𝗵𝘁's move are different.",
        "html" : "<li>Digits separated by a chess <b>knight</b>'s move are different.</li>"
      }]
    },{
      "id"    : "arrows",
      "title" : "arrows",
      "scope" : "other",
			"symbol": "⟶",
      "order" :"1",
      "descriptions" : [{
        "title": "circ",
        "text" : "Digits on the tip of an 𝗮𝗿𝗿𝗼𝘄 sum to the number in the circle.",
        "html" : "<li>Digits on the tip of an <b>arrow</b> sum to the number in the circle.</li>"
      },{
        "title": "pill",
        "text" : "Digits on the tip of an 𝗮𝗿𝗿𝗼𝘄 sum to the number in the circle or pill. Pills are read in normal reading order. 𝘪.𝘦. 𝘧𝘳𝘰𝘮 𝘭𝘦𝘧𝘵 𝘵𝘰 𝘳𝘪𝘨𝘩𝘵 𝘢𝘯𝘥 𝘵𝘰𝘱 𝘵𝘰 𝘣𝘰𝘵𝘵𝘰𝘮.",
        "html" : "<li>Digits on the tip of an <b>arrow</b> sum to the number in the circle or Pill. Pills are read in normal reading order.<i>i.e. from left to right and top to bottom.</i></li>"
      }]
    },{
      "id"    : "diagonal",
      "title" : "diagonal",
      "scope" : "outside",
			"symbol": "⟋",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits do not repeat on a 𝗯𝗹𝘂𝗲 𝗱𝗶𝗮𝗴𝗼𝗻𝗮𝗹 line.",
        "html" : "<li>Digits do not repeat on a <b>blue diagonal</b> line.</li>"
      }]
    },{
      "id"    : "dutch",
      "title" : "dutch whispers",
      "scope" : "lines",
			"symbol": "🟠",
      "order" : "1",
      "descriptions" : [{
        "text" : "Adjacent digits on an orange 𝗱𝘂𝘁𝗰𝗵 𝘄𝗵𝗶𝘀𝗽𝗲𝗿𝘀 line differ by at least 4.",
        "html" : "<li>On an <i style=\"background-color:orange;padding:0 0.5ch;margin:0 0.5ch;\">orange</i> <b>dutch whispers line</b> adjacent digits differ by at least 4.</li>"
      }]
    },{
      "id"    : "entropic",
      "title" : "entropic",
      "scope" : "lines",
			"symbol": "🍑",
      "order" : "1",
      "descriptions" : [{
        "text" : "Any set of three sequential cells along a peach 𝗲𝗻𝘁𝗿𝗼𝗽𝗶𝗰 line must contain a 𝘭𝘰𝘸 {1,2,3}, 𝘮𝘪𝘥𝘥𝘭𝘦 {4,5,6}, and 𝘩𝘪𝘨𝘩 digit {7,8,9}.",
        "html" : "<li>Along a<i style=\"background-color:peachPuff;padding:0 0.5ch;margin:0 0.5ch;\">peach</i><b>entropic line</b> any set of three sequential cells must contain a <i>low</i> {1,2,3}, <i>middle</i> {4,5,6}, and <i>high</i> {7,8,9} digit.</li>"
      }]
    },{
      "id"    : "fog",
      "title" : "fog of war",
      "scope" : "global",
			"symbol": "🌫️",
      "order" : "1",
      "descriptions" : [{
        "text" : "Part of the grid is covered with 𝗳𝗼𝗴. As correct digits are placed, the fog will clear from cells surrounding the digit. No guessing required. ",
        "html" : "<li>Part of the grid is covered with <b>fog</b>. As correct digits are placed, the fog will clear from cells surrounding the digit. No guessing required.</li>"
      }]
    },{
      "id"    : "german",
      "title" : "german whispers",
      "scope" : "lines",
			"symbol": "🟢",
      "order" : "1",
      "descriptions" : [{
        "text" : "Adjacent digits on a green 𝗴𝗲𝗿𝗺𝗮𝗻 𝘄𝗵𝗶𝘀𝗽𝗲𝗿𝘀 line differ by at least 5.",
        "html" : "<li>On a<i style=\"background-color:lightGreen;padding:0 0.5ch;margin:0 0.5ch;\">green</i><b>german whispers line</b> adjacent digits differ by at least 5.</li>"
      }]
    },{
      "id"    : "globent",
      "title" : "global entropy",
      "scope" : "global",
      "symbol": "",
      "order" : "1",
      "descriptions" : [{
        "text" : "Every 2x2 square contains a 𝘭𝘰𝘸 {1,2,3}, 𝘮𝘪𝘥𝘥𝘭𝘦 {4,5,6}, and 𝘩𝘪𝘨𝘩 digit {7,8,9}.",
        "html" : "<li>Every 2x2 square contain a <i>low</i> {1,2,3}, <i>middle</i> {4,5,6}, and <i>high</i> {7,8,9} digit.</li>"
      }]
    },{
      "id"    : "globmod",
      "title" : "global modulo 3",
      "scope" : "global",
      "symbol": "",
      "order" : "1",
      "descriptions" : [{
        "text" : "Every 2x2 square contains a digit from {1,4,7}, {2,5,8} and {3,6,9}.",
        "html" : "<li>Every 2x2 square contain a digit from {1,4,7}, {2,5,8} and {3,6,9}.</li>"
      }]
    },{
      "id"    : "inequality",
      "title" : "inequality sign",
      "scope" : "neighbours",
      "symbol": "<",
      "order" : "1",
      "descriptions" : [{
        "text" : "An 𝗶𝗻𝗲𝗾𝘂𝗮𝗹𝗶𝘁𝘆 𝘀𝗶𝗴𝗻 points to the lower digit. ",
        "html" : "<li>An <b>inequality sign</b> points to the lower digit.</li>"
      }]
    },{
      "id"    : "killer",
      "title" : "killercage",
      "scope" : "other",
			"symbol": "⬚",
      "order" : "1",
      "descriptions" : [{
        "title": "short",
        "text" : "Digits in a 𝗸𝗶𝗹𝗹𝗲𝗿 𝗰𝗮𝗴𝗲 sum to the given total.",
        "html" : "<li>Digits in a <b>killer cage</b> sum to the given total.</li>"
      },{
        "title": "med",
        "text" : "Digits in a 𝗸𝗶𝗹𝗹𝗲𝗿 𝗰𝗮𝗴𝗲 do not repeat and sum to the given total.",
        "html" : "<li>Digits in a <b>killer cage</b> do not repeat and sum to the given total.</li>"
      },{
        "title": "long",
        "text" : "Digits in a 𝗸𝗶𝗹𝗹𝗲𝗿 𝗰𝗮𝗴𝗲 do not repeat and sum to the value in the upper left corner, when given.",
        "html" : "<li>Digits in a <b>killer cage</b> do not repeat and sum to the value in the upper left corner, when given.</li>"
      }]
    },{
      "id"    : "black",
      "title" : "kropki⚫",
      "scope" : "neighbours",
			"symbol": "•",
      "order" : "1",
      "descriptions" : [{
        "title" : "normal",
        "text" : "Digits separated by a 𝗯𝗹𝗮𝗰𝗸 kropki 𝗱𝗼𝘁 have a 1:2 ratio.",
        "html" : "<li>Digits separated by a <b>black</b> kropki <b>dot</b> have a 1:2  ratio.</li>"
      },{
        "title" : "nr",
        "text" : "Digits separated by a 𝗯𝗹𝗮𝗰𝗸 kropki 𝗱𝗼𝘁 are in 1:x ratio, where x is the given number.",
        "html" : "<li>Digits separated by a <b>black</b> kropki <b>dot</b> are in 1:x ratio, where x is the given number.</li>"
      },{
        "title" : "all",
        "text" : "Digits separated by a 𝗯𝗹𝗮𝗰𝗸 kropki 𝗱𝗼𝘁 are in 1:2 ratio. All dots are given.",
        "html" : "<li>Digits separated by a <b>black</b> kropki <b>dot</b> are in 1:2 ratio. All dots are given.</li>"
      }]
    },{
      "id"    : "white",
      "title" : "kropki⚪",
      "scope" : "neighbours",
			"symbol": "◦",
      "order" : "1",
      "descriptions" : [{
        "title" : "normal",
        "text" : "Digits separated by a 𝘄𝗵𝗶𝘁𝗲 kropki 𝗱𝗼𝘁 are consecutive.",
        "html" : "<li>Digits separated by a <b>white</b> kropki <b>dot</b> are consecutive.</li>"
      },{
        "title" : "nr",
        "text" : "Digits separated by a 𝘄𝗵𝗶𝘁𝗲 kropki 𝗱𝗼𝘁 differ by the given number.",
        "html" : "<li>Digits separated by a <b>white</b> kropki <b>dot</b> differ by the given number.</li>"
      },{
        "title" : "all",
        "text" : "Digits separated by a 𝘄𝗵𝗶𝘁𝗲 kropki 𝗱𝗼𝘁 are consecutive. All dots are given.",
        "html" : "<li>Digits separated by a <b>white</b> kropki <b>dot</b> are consecutive.</li>"
      }]
    },{
      "id"    : "little",
      "title" : "little killer",
      "scope" : "outside",
			"symbol": "↗",
      "order" : "1",
      "descriptions" : [{
        "text" : "𝗹𝗶𝘁𝘁𝗹𝗲 𝗸𝗶𝗹𝗹𝗲𝗿: Clues outside the grid show the sum of the digits along the indicated diagonal.",
        "html" : "<li><b>little killer</b>:Clues outside the grid show the sum of the digits along the indicated diagonal.</li>"
      }]
    },{
      "id"    : "modular",
      "title" : "modular",
      "scope" : "lines",
			"symbol": "🦆",
      "order" : "1",
      "descriptions" : [{
        "text" : "3 adjacent digits on a teal 𝗺𝗼𝗱𝘂𝗹𝗮𝗿 line each have a different remainder when divided by 3. 𝘪.𝘦. 𝘰𝘯𝘦 𝘥𝘪𝘨𝘪𝘵 𝘧𝘳𝘰𝘮 {1,4,7}, 𝘰𝘯𝘦 𝘧𝘳𝘰𝘮 {2,5,8} 𝘢𝘯𝘥 𝘰𝘯𝘦 𝘧𝘳𝘰𝘮 {3,6,9}.",
        "html" : "<li>Along a<i style=\"background-color:#00a0a0;gray;padding:0 0.5ch;margin:0 0.5ch;\">teal</i><b>modular line</b> any set of three adjacent digits has three different remainders when divided by 3. <i>i.e. one digit from</i> {1,4,7}, <i>one from</i> {2,5,8} <i>and one from</i> {3,6,9}</li>"
      }]
    },{
      "id"    : "nabner",
      "title" : "nabner",
      "scope" : "lines",
			"symbol": "🟡",
      "order" : "1",
      "descriptions" : [{
        "text" : "A golden 𝗻𝗮𝗯𝗻𝗲𝗿 line does not contain consecutive or repeated digits.",
        "html" : "<li>A <i style=\"background-color:gold;padding:0 0.5ch;margin:0 0.5ch;\">golden</i> <b>nabner line</b> does not contain consecutive or repeated digits.</li>"
      }]
    },{
      "id"    : "palindrome",
      "title" : "palindrome",
      "scope" : "lines",
			"symbol": "🪞",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits along a grey 𝗽𝗮𝗹𝗶𝗻𝗱𝗿𝗼𝗺𝗲 line read the same forwards as backwards.",
        "html" : "<li>Digits along a grey <b>palindrome line</b> read the same forwards as backwards.</li>"
      }]
    },{
      "id"    : "quadruples",
      "title" : "quadruples",
      "scope" : "other",
			"symbol": "⨁",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits in a 𝗾𝘂𝗮𝗱𝗿𝘂𝗽𝗹𝗲 circle appear at least once in the surrounding cells. ",
        "html" : "<li>Digits in a <b>quadruple</b> circle appear at least once in the surrounding cells. </li>"
      }]
    },{
      "id"    : "renban",
      "title" : "renban",
      "scope" : "lines",
			"symbol": "🦩",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits on a purple 𝗿𝗲𝗻𝗯𝗮𝗻 line form a set of distinct consecutive digits.",
        "html" : "<li>Digits on a<i style=\"background-color:violet;padding:0 0.5ch;margin:0 0.5ch;\">purple</i><b>renban line</b> form a set of distinct consecutive digits.</li>"
      }]
    },{
      "id"    : "regionsum",
      "title" : "region sum",
      "scope" : "lines",
			"symbol": "🔵",
      "order" : "1",
      "descriptions" : [{
        "text" : "Box borders divide blue 𝗿𝗲𝗴𝗶𝗼𝗻 𝘀𝘂𝗺 lines into segments with the same sum.",
        "html" : "<li>Box borders divide <i style=\"background-color:lightblue;padding:0 0.5ch;margin:0 0.5ch;\">blue</i> <b>region sum lines</b> into segments with the same sum.</li>"
      }]
    },{
      "id"    : "sudoku",
      "title" : "sudoku",
      "scope" : "main",
			"symbol": "",
      "order" : "0",
      "descriptions" : [{
        "title": "standard",
        "text" : "Place the digits 1-9 once in each row, column and box.",
        "html" : "<li><b>normal Sudoku</b>: Put the digits 1-9 once in each row, column and box.</li>"
      },{
        "title": "irregular",
        "text" : "Place the digits 1-9 once in each row, column and 𝗶𝗿𝗿𝗲𝗴𝘂𝗹𝗮𝗿 region.",
        "html" : "<li><b>Irregular Sudoku</b>: Put the digits 1-9 once in each row, column and region.</li>"
      }]
    },{
      "id"    : "thermometer",
      "title" : "thermo",
      "scope" : "other",
			"symbol": "🌡",
      "order" : "1",
      "descriptions" : [{
        "title" : "norm",
        "text" : "Digits on a 𝘁𝗵𝗲𝗿𝗺𝗼𝗺𝗲𝘁𝗲𝗿 increase from bulb to tip. ",
        "html" : "<li>On a <b>thermometer</b> digits increase from bulb to tip.</li>"
      },{
        "title" : "slow",
        "text" : "Digits on a 𝘀𝗹𝗼𝘄 𝘁𝗵𝗲𝗿𝗺𝗼𝗺𝗲𝘁𝗲𝗿 increase or stay the same from bulb to tip. ",
        "html" : "<li>On a <b>slow thermometer</b> digits increase or stay the same from bulb to tip.</li>"
      }]
    },{
      "id"    : "v",
      "title" : "V",
      "scope" : "neighbours",
      "symbol": "ᵛ",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits separated by a 𝗩 sum to 5.",
        "html" : "<li>Digits separated by a <b>V</b> sum to 5.</li>"
      }]
    },{
      "id"    : "x",
      "title" : "X",
      "scope" : "neighbours",
      "symbol": "ˣ",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits separated by an 𝗫 sum to 10.",
      "html" : "<li>Digits separated by an <b>X</b> sum to 10.</li>"
    }]
  },{
    "id"    : "x-sums",
    "title" : "x-sums",
    "scope" : "outside",
			"symbol": "ⓧ",
    "order" : "1",
    "descriptions" : [{
      "text" : "Clues at the edge show the sum of the first 𝘹 digits, where 𝘹 is the first seen digit.",
      "html" : "<li><b>x-sums</b>: Clues at the edge show the sum of the first x digits, where x is the first seen digit.</li>"
    }]
  }
]
}
