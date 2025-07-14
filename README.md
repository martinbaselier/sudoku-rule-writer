# sudoku-rule-writer

This tool has been created to make the task of adding rules to a sudoku easier. It contains most common rules for variation sudoku. I will slowly extend this. Since I can be quite punctilious about the wording, it might change between versions. The code has been tested with Firefox and Chromium. 

Clues are grouped by type. Within a group, clues are ordered alphabetically. The following groups were used: main , global, other, outside, neighbours and lines
I've used unicode characters as icons, that's why some icons can be a bit strange (like peach or teal)

When you paste in the image code from German Logic Masters and the sudokupad-link they will be added to the html. Both the picture and the play-button will be clickable and link to your sudoku.

You can download the source and run it on you own pc or use it directly online at https://martinbaselier.github.io/sudoku-rule-writer/

Feel free to modify and adapt it for your own use. Just add your rules to rules.js and they should appear. It should be pretty much self-explanatory. <i>FYI: The rules in rules.js are ordered alphabetically by id. This is not necessary, it's just convenient.</i>
