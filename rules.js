ruleset={
  scopes: ["main","global","other","outside","neighbours","lines"],
  classes: {
    "main"       : "success",
    "global"     : "primary",
    "other"      : "info",
    "outside"    : "primary",
    "neighbours" : "info",
    "lines"      : "primary"
  },
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
        "text" : "Digits on an 𝗮𝗿𝗿𝗼𝘄 sum to the number in the attached circle.",
        "html" : "<li>Digits on an <b>arrow</b> sum to the number in the attached circle.</li>"
      },{
        "title": "pill",
        "text" : "Digits on an 𝗮𝗿𝗿𝗼𝘄 sum to the number in the attached circle or pill. Pills are read in normal reading order. 𝘪.𝘦. 𝘧𝘳𝘰𝘮 𝘭𝘦𝘧𝘵 𝘵𝘰 𝘳𝘪𝘨𝘩𝘵 𝘢𝘯𝘥 𝘵𝘰𝘱 𝘵𝘰 𝘣𝘰𝘵𝘵𝘰𝘮.",
        "html" : "<li>Digits on an <b>arrow</b> sum to the number in the attached circle or Pill. Pills are read in normal reading order.<i>i.e. from left to right and top to bottom.</i></li>"
      }]
    },{
      "id"    : "circles",
      "title" : "counting circles",
      "scope" : "other",
      "symbol": "○",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits in a 𝗰𝗶𝗿𝗰𝗹𝗲 indicate exactly how many circles contain that digit.",
        "html" : "<li>Digits in a <b>counting circle</b> indicate exactly how many circles contain that digit.</li>"
      }]
    },{
      "id"    : "diagonal",
      "title" : "diagonal",
      "scope" : "other",
			"symbol": "⟋",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits do not repeat on a 𝗯𝗹𝘂𝗲 𝗱𝗶𝗮𝗴𝗼𝗻𝗮𝗹 line.",
        "html" : "<li>Digits do not repeat on a <b>blue diagonal</b> line.</li>"
      }]
    },{
      "id"    : "double",
      "title" : "double arrow",
      "scope" : "other",
      "symbol": "⟷",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits on a 𝗱𝗼𝘂𝗯𝗹𝗲 𝗮𝗿𝗿𝗼𝘄 sum to the same number as the digits in the circles.",
        "html" : "<li>Digits on a <b>double arrow</b> sum to the same number as the digits in the circles.</li>"
      }]
    },{
      "id"    : "dutch",
      "title" : "dutch whispers",
      "scope" : "lines",
			"symbol": "🟠",
      "order" : "1",
      "descriptions" : [{
        "text" : "Adjacent digits on an orange 𝗱𝘂𝘁𝗰𝗵 𝘄𝗵𝗶𝘀𝗽𝗲𝗿𝘀 line differ by at least 4.",
        "html" : "<li>On an <i style=\"background-color:orange;border-radius:0.5em;padding:0 0.5ch;margin:0 0.5ch;\">orange</i> <b>dutch whispers line</b> adjacent digits differ by at least 4.</li>"
      }]
    },{
      "id"    : "disjoint",
      "title" : "disjoint groups",
      "scope" : "global",
			"symbol": "⛓️‍💥",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits do not repeat on the same position within a box.",
        "html" : "<li><b>disjoint groups</b>: Digits do not repeat on the same position within a box.</li>"
      }]
    },{
      "id"    : "entropic",
      "title" : "entropic",
      "scope" : "lines",
			"symbol": "🍑",
      "order" : "1",
      "descriptions" : [{
        "text" : "Any set of three sequential cells along a peach 𝗲𝗻𝘁𝗿𝗼𝗽𝗶𝗰 line must contain a 𝘭𝘰𝘸 {1,2,3}, 𝘮𝘪𝘥𝘥𝘭𝘦 {4,5,6}, and 𝘩𝘪𝘨𝘩 digit {7,8,9}.",
        "html" : "<li>Along a<i style=\"background-color:peachPuff;border-radius:0.5em;padding:0 0.5ch;margin:0 0.5ch;\">peach</i><b>entropic line</b> any set of three sequential cells must contain a <i>low</i> {1,2,3}, <i>middle</i> {4,5,6}, and <i>high</i> {7,8,9} digit.</li>"
      }]
    },{
      "id"    : "fog",
      "title" : "fog of war",
      "scope" : "global",
			"symbol": "🌫️",
      "order" : "1",
      "descriptions" : [{
        "title": "classic",
        "text" : "Part of the grid is covered with 𝗳𝗼𝗴. As correct digits are placed, the fog will clear from cells surrounding the digit. No guessing required. ",
        "html" : "<li>Part of the grid is covered with <b>fog</b>. As correct digits are placed, the fog will clear from cells surrounding the digit. No guessing required.</li>"
      },{
        "title": "modern",
        "text" : "Part of the grid is covered with 𝗳𝗼𝗴. When a correct digits is placed, fog might clear somewhere in the grid. Guessing is not required.",
        "html" : "<li>Part of the grid is covered with <b>fog</b>. When a correct digits is placed, fog might clear somewhere in the grid. Guessing is not required.</li>"
      }]
    },{
      "id"    : "german",
      "title" : "german whispers",
      "scope" : "lines",
			"symbol": "🟢",
      "order" : "1",
      "descriptions" : [{
        "text" : "Adjacent digits on a green 𝗴𝗲𝗿𝗺𝗮𝗻 𝘄𝗵𝗶𝘀𝗽𝗲𝗿𝘀 line differ by at least 5.",
        "html" : "<li>On a<i style=\"background-color:lightGreen;border-radius:0.5em;padding:0 0.5ch;margin:0 0.5ch;\">green</i><b>german whispers line</b> adjacent digits differ by at least 5.</li>"
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
        "text" : "Digits separated by a 𝗯𝗹𝗮𝗰𝗸 𝗱𝗼𝘁 have a 1:2 ratio.",
        "html" : "<li>Digits separated by a <b>black</b> kropki <b>dot</b> have a 1:2  ratio.</li>"
      },{
        "title" : "nr",
        "text" : "Digits separated by a 𝗯𝗹𝗮𝗰𝗸 𝗱𝗼𝘁 are in 1:x ratio, where x is the given number.",
        "html" : "<li>Digits separated by a <b>black kropki</b> are in 1:x ratio, where x is the given number.</li>"
      },{
        "title" : "special",
        "text" : "Digits separated by a 𝗯𝗹𝗮𝗰𝗸 𝗱𝗼𝘁, are the ending digits of two values that have a 1:2 ratio. I.e. a 𝟲 may be next to a 𝟯 (3⋅2=6), an 𝟴 (8⋅2=16) and a 𝟮 (6⋅2=12).",
        "html" : "<li>Digits separated by a <b>black kropki</b>, are the last digits of two values that have a 1:2 ratio. I.e. a <b>6</b> may be next to a <b>3</b> (3⋅2=6), an <b>8</b> (8⋅2=16) or a <b>2</b> (6⋅2=12).</li>"
      },{
        "title" : "all",
        "text" : "Digits separated by a 𝗯𝗹𝗮𝗰𝗸 𝗱𝗼𝘁 are in 1:2 ratio. All dots are given.",
        "html" : "<li>Digits separated by a <b>black kropki</b> are in 1:2 ratio. All dots are given.</li>"
      }]
    },{
      "id"    : "white",
      "title" : "kropki⚪",
      "scope" : "neighbours",
			"symbol": "◦",
      "order" : "1",
      "descriptions" : [{
        "title" : "normal",
        "text" : "Digits separated by a 𝘄𝗵𝗶𝘁𝗲 𝗱𝗼𝘁 are consecutive.",
        "html" : "<li>Digits separated by a <b>white kropki</b> are consecutive.</li>"
      },{
        "title" : "nr",
        "text" : "Digits separated by a 𝘄𝗵𝗶𝘁𝗲 𝗱𝗼𝘁 differ by the given number.",
        "html" : "<li>Digits separated by a <b>white kropki</b> differ by the given number.</li>"
      },{
        "title" : "all",
        "text" : "Digits separated by a 𝘄𝗵𝗶𝘁𝗲 𝗱𝗼𝘁 are consecutive. All dots are given.",
        "html" : "<li>Digits separated by a <b>white kropki</b> are consecutive.</li>"
      }]
    },{
      "id"    : "little",
      "title" : "little killer",
      "scope" : "outside",
			"symbol": "↗",
      "order" : "1",
      "descriptions" : [{
        "text" : "𝗹𝗶𝘁𝘁𝗹𝗲 𝗸𝗶𝗹𝗹𝗲𝗿: Clues outside the grid show the sum of the digits along the indicated diagonal.",
        "html" : "<li><b>little killer</b>: Clues outside the grid show the sum of the digits along the indicated diagonal.</li>"
      }]
    },{
      "id"    : "oddeven",
      "title" : "odd/even",
      "scope" : "other",
      "symbol": "⚫■",
      "order" : "1",
      "descriptions" : [{
        "title" : "both",
        "text" : "Digits on a solid gray 𝗰𝗶𝗿𝗰𝗹𝗲 are odd. Digits on a solid gray 𝘀𝗾𝘂𝗮𝗿𝗲 are even.",
        "html" : "<li>Digits on a <b>solid gray circle</b> are odd. Digits on a <b>solid gray square</b> are even.</li>"
      },{
        "title" : "even",
        "text" : "Digits on a solid gray 𝘀𝗾𝘂𝗮𝗿𝗲 are even.",
        "html" : "<li>Digits on a <b>solid gray square</b> are even.</li>"
      },{
        "title" : "odd",
        "text" : "Digits on a solid gray 𝗰𝗶𝗿𝗰𝗹𝗲 are odd.",
        "html" : "<li>Digits on a <b>solid gray circle</b> are odd.</li>"
      }]
    },{
      "id"    : "modular",
      "title" : "modular",
      "scope" : "lines",
			"symbol": "🦆",
      "order" : "1",
      "descriptions" : [{
        "text" : "3 adjacent digits on a teal 𝗺𝗼𝗱𝘂𝗹𝗮𝗿 line each have a different remainder when divided by 3. 𝘪.𝘦. 𝘰𝘯𝘦 𝘥𝘪𝘨𝘪𝘵 𝘧𝘳𝘰𝘮 {1,4,7}, 𝘰𝘯𝘦 𝘧𝘳𝘰𝘮 {2,5,8} 𝘢𝘯𝘥 𝘰𝘯𝘦 𝘧𝘳𝘰𝘮 {3,6,9}.",
        "html" : "<li>Along a<i style=\"background-color:#00a0a0;color:white;border-radius:0.5em;padding:0 0.6ch 0 0.4ch;margin:0 0.5ch;\">teal</i><b>modular line</b> any set of three adjacent digits has three different remainders when divided by 3. <i>i.e. one digit from</i> {1,4,7}, <i>one from</i> {2,5,8} <i>and one from</i> {3,6,9}</li>"
      }]
    },{
      "id"    : "nabner",
      "title" : "nabner",
      "scope" : "lines",
			"symbol": "🟡",
      "order" : "1",
      "descriptions" : [{
        "text" : "A golden 𝗻𝗮𝗯𝗻𝗲𝗿 line does not contain consecutive or repeated digits.",
        "html" : "<li>A <i style=\"background-color:gold;border-radius:0.5em;padding:0 0.5ch;margin:0 0.5ch;\">golden</i> <b>nabner line</b> does not contain consecutive or repeated digits.</li>"
      }]
    },{
      "id"    : "parity",
      "title" : "parity",
      "scope" : "lines",
			"symbol": "🔴",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits on a red 𝗽𝗮𝗿𝗶𝘁𝘆 line alternate between odd and even.",
        "html" : "<li>Digits on a <i style=\"background-color:crimson;color:white;border-radius:0.5em;padding:0 0.7ch 0 0.5ch;margin:0 0.5ch;\">red</i> <b>parity line</b> alternate between odd and even.</li>"
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
      "id"    : "powerdot",
      "title" : "power dot",
      "scope" : "neighbours",
			"symbol": "🟣",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits separated by a purple 𝗽𝗼𝘄𝗲𝗿 𝗱𝗼𝘁 sum to a power of 2. (1, 2, 4, 8, etc.).",
        "html" : "<li>Digits separated by a purple <b>power dot</b> sum to a power of 2. (1, 2, 4, 8, etc.).</li>"
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
        "html" : "<li>Digits on a<i style=\"background-color:violet;border-radius:0.5em;padding:0 0.5ch;margin:0 0.5ch;\">purple</i><b>renban line</b> form a set of distinct consecutive digits.</li>"
      }]
    },{
      "id"    : "regionsum",
      "title" : "region sum",
      "scope" : "lines",
			"symbol": "🔵",
      "order" : "1",
      "descriptions" : [{
        "text" : "Box borders divide blue 𝗿𝗲𝗴𝗶𝗼𝗻 𝘀𝘂𝗺 lines into segments with the same sum.",
        "html" : "<li>Box borders divide <i style=\"background-color:lightblue;border-radius:0.5em;padding:0 0.5ch;margin:0 0.5ch;\">blue</i> <b>region sum lines</b> into segments with the same sum.</li>"
      }]
    },{
      "id"    : "sandwich",
      "title" : "sandwich",
      "scope" : "outside",
			"symbol": "🥪",
      "order" : "1",
      "descriptions" : [{
        "title": "normal",
        "text" : "𝘀𝗮𝗻𝗱𝘄𝗶𝗰𝗵: Clues outside the grid show the sum of the digits between 1 and 9 in that row or column.",
        "html" : "<li><b>sandwich</b>: Clues outside the grid show the sum of the digits between 1 and 9 in that row or column.</li>"
      },{
        "title": "make your own",
        "text" : "𝘀𝗮𝗻𝗱𝘄𝗶𝗰𝗵: Clues outside the grid show the sum of the digits between the two \"crust\" digits, in that row or column. The crust digits are the same in each row and column and have to be determined by the solver.",
        "html" : "<li><b>sandwich</b>: Clues outside the grid show the sum of the digits between the two &quot;crust&quot; digits in that row or column. The crust digits are the same in each row and column and have to be determined by the solver.</li>"
      },{
        "title": "rainbow",
        "text" : "𝗿𝗮𝗶𝗻𝗯𝗼𝘄 𝘀𝗮𝗻𝗱𝘄𝗶𝗰𝗵: Shade some cells of the grid in two different colors, such that there is exactly one cell of each color in every row, column and box. Digits don't repeat within the same color. Clues outside the grid indicate the sum of the digits between the two colored cells in that row or column.",
        "html" : "<li><b>rainbow sandwich</b>: Shade some cells of the grid in two different colors, such that there is exactly one cell of each color in every row, column and box. Digits don't repeat within the same color. Clues outside the grid indicate the sum of the digits between the two colored cells in that row or column.</li>"
      }]
    },{
      "id"    : "schrodinger",
      "title" : "Schrödinger",
      "scope" : "global",
      "symbol": "🐈",
      "order" : "1",
      "descriptions" : [{
        "title": "normal",
        "text" : "Each row, column and box has one 𝗦𝗰𝗵𝗿𝗼̈𝗱𝗶𝗻𝗴𝗲𝗿 cell, containing two digits. Its value is the sum of its digits.",
        "html" : "<li>Each row, column and box has one <b>Schrödinger</b> cell, containing two digits. Its value is the sum of its digits.</li>"
      },{
        "title": "superposition",
        "text" : "Each row, column and box has one 𝗦𝗰𝗵𝗿𝗼̈𝗱𝗶𝗻𝗴𝗲𝗿 cell. Each Schrödinger cell contains a unique set of two digits. In an uncollapsed state conditions apply to both digits, meaning there is at least one possible outcome where the condition is satisfied for either digit.",
        "html" : "<li>Each row, column and box has one <b>Schrödinger</b> cell. Each Schrödinger cell contains a unique set of two digits. In an uncollapsed state conditions apply to both digits, meaning there is at least one possible outcome where the condition is satisfied for either digit.</li>"
      }]
    },{
      "id"    : "sudoku",
      "title" : "sudoku",
      "scope" : "main",
			"symbol": "",
      "order" : "0",
      "descriptions" : [{
        "title": "standard",
        "text" : "Place the digits <span class=\"digits\"></span> once in each row, column and box.",
        "html" : "<li><b>normal Sudoku</b>: Put the digits",
        "html2": "once in each row, column and box.</li>"
      },{
        "title": "irregular",
        "text" : "Place the digits <span class=\"digits\"></span> once in each row, column and 𝗶𝗿𝗿𝗲𝗴𝘂𝗹𝗮𝗿 region.",
        "html" : "<li><b>Irregular Sudoku</b>: Put the digits",
        "html2": "once in each row, column and region.</li>"
      },{
        "title": "quatro quadri",
        "text" : "Place the digits <span class=\"digits\"></span> once in every box. Digit do not repeat horizontally or vertically.",
        "html" : "<li><b>Quatro quadri</b>: Place the digits",
        "html2": "once in every box. Digits do not repeat horizontally or vertically.</li>"
      },{
        "title": "unboxed",
        "text" : "There exist 9 non-overlapping 3x3 square regions which must be located. Each region contains the digits <span class=\"digits\"></span> once each, such that no digit repeats in any row or column. Cells outside these regions do not contain digits and have a value of 0.",
        "html" : "<li>There exist 9 non-overlapping 3x3 square regions which must be located. Each region contains the digits",
        "html2": "once each, such that no digit repeats in any row or column. Cells outside these regions do not contain digits and have a value of 0.</li>"
      },{
        "title": "chaos construction",
        "text" : "Place the digits <span class=\"digits\"></span> once in every row, column and region. The regions need to be determined by the solver. Each region consists of 9 cells. All cells are orthogonally adjacent.",
        "html" : "<li><b>Chaos construction</b>: Place the digits",
        "html2": "once in every row, column and region. The regions need to be determined by the solver. Each region consists of 9 cells. All cells are orthogonally adjacent.</li>"
      },{
        "title": "somedoku",
        "text" : "Place the digits <span class=\"digits\"></span> in the grid. Row N contains N different digits. Column N contains N different digits. Rows are numbered from top to bottom and columns from left to right.",
        "html" : "<li><b>Somedoku</b>: Place the digits",
        "html2": "in the grid. Row N contains N different digits. Column N contains N different digits. Rows are numbered from top to bottom and columns from left to right. </li>"
      }]
    },{
      "id"    : "thermometer",
      "title" : "thermo",
      "scope" : "other",
			"symbol": "🌡",
      "order" : "1",
      "descriptions" : [{
        "title": "norm",
        "text" : "Digits on a 𝘁𝗵𝗲𝗿𝗺𝗼𝗺𝗲𝘁𝗲𝗿 increase from bulb to tip. ",
        "html" : "<li>On a <b>thermometer</b> digits increase from bulb to tip.</li>"
      },{
        "title": "slow",
        "text" : "Digits on a 𝘀𝗹𝗼𝘄 𝘁𝗵𝗲𝗿𝗺𝗼𝗺𝗲𝘁𝗲𝗿 increase or stay the same from bulb to tip. ",
        "html" : "<li>On a <b>slow thermometer</b> digits increase or stay the same from bulb to tip.</li>"
      }]
    },{
      "id"    : "threeline",
      "title" : "threeline",
      "scope" : "lines",
			"symbol": "🌲",
      "order" : "1",
      "descriptions" : [{
        "text" : "Divide the digit into red, green and blue digits. There are 3 digits in each color.  Three sequential cells along a yellow 𝘁𝗵𝗿𝗲𝗲𝗹𝗶𝗻𝗲 contain a red, a green and a blue digit.",
        "html" : "<li>Divide the digit into red, green and blue digits. There are 3 digits in each color.  Three sequential cells along a<i style=\"background-color:yellow;border-radius:0.5em;padding:0 0.5ch;margin:0 0.5ch;\">yellow</i><b>threeline</b> contain a red, a green and a blue digit.</li>"
      }]
    },{
      "id"    : "v",
      "title" : "V",
      "scope" : "neighbours",
      "symbol": "ᵛ",
      "order" : "1",
      "descriptions" : [{
        "title": "normal",
        "text" : "Digits separated by a 𝗩 sum to 5.",
        "html" : "<li>Digits separated by a <b>V</b> sum to 5.</li>"
      },{
        "title": "all V",
        "text" : "Digits separated by a 𝗩 sum to 5. All V's are given.",
        "html" : "<li>Digits separated by an <b>X</b> sum to 10.</li>"
      }]
    },{
      "id"    : "x",
      "title" : "X",
      "scope" : "neighbours",
      "symbol": "ˣ",
      "order" : "1",
      "descriptions" : [{
        "title": "normal",
        "text" : "Digits separated by an 𝗫 sum to 10.",
        "html" : "<li>Digits separated by an <b>X</b> sum to 10.</li>"
      },{
        "title": "all X",
        "text" : "Digits separated by an 𝗫 sum to 10. All X's are given.",
        "html" : "<li>Digits separated by an <b>X</b> sum to 10.</li>"
      },{
        "title": "all V&X",
        "text" : "Digits separated by an 𝗫 sum to 10. \nAll V's and X's are given.",
        "html" : "<li>Digits separated by an <b>X</b> sum to 10.</li>"
      }]
  },{
    "id"    : "x-sums",
    "title" : "x-sums",
    "scope" : "outside",
		"symbol": "Σ",
    "order" : "1",
    "descriptions" : [{
      "text" : "Clues outside the grid show what the first 𝘅 digits 𝘀𝘂𝗺 to, where 𝘹 is the first seen digit.",
      "html" : "<li><b>x-sums</b>: Clues outside the grid show the sum of the first x digits, where x is the first seen digit.</li>"
    }]
  },{
    "id"    : "yinyang",
    "title" : "yin yang",
    "scope" : "global",
    "symbol": "☯",
    "order" : "1",
    "descriptions" : [{
      "title": "ying yang",
      "text" : "Shade some cells such that all shaded cells are orthogonally connected, all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",
      "html" : "<li><b>Yin Yang</b>:Shade some cells such that all shaded cells are orthogonally connected, all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.</li>"
    }]
  },{
      "id"    : "zipper",
      "title" : "zipper",
      "scope" : "lines",
			"symbol": "🤐",
      "order" : "1",
      "descriptions" : [{
        "text" : "Digits an equal distance from the center of a lavender 𝘇𝗶𝗽𝗽𝗲𝗿 line sum to the same number. The centre has been marked with a dot.",
        "html" : "<li>Digits an equal distance from the center of a<i style=\"background-color:lavender;border-radius:0.5em;padding:0 0.5ch;margin:0 0.5ch;\">lavender</i><b>zipper line</b>  sum to the same number. The centre has been marked with a dot.</li>"
    }]
  }
]
}
