# thinkful-16-3-captone
cipher captstone project

## Installation Instructions

1. Fork this repository by clicking the Fork button at the top right of the page.
2. Clone this repository.
3. `cd` into the newly created directory.
4. Run `npm i`.
5. To run the tests, you can run the following command: Run `npm test`.

To stop the server from running, you can press Control+C.

## Caesar
The Caesar shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter A would become D.

"thinkful" -> "wklqnixo"

## Polybius square
The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter B would be represented by the numerical pair 21.

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.

"thinkful" -> "4432423352125413"

## Substitution cipher

The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

For example, in the image above, the word HELLO would be translated as follows:

H becomes R.
E becomes M.
L becomes W.
O becomes L.
This would result in the code RMWWL. To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.

substitution()
The substitution() function in the src/substitution.js file has three parameters:

input refers to the inputted text to be encoded or decoded.
alphabet refers to substitution alphabet.
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

The input could include spaces and letters as well as special characters such as #, $, *, etc.
Spaces should be maintained throughout.
Capital letters can be ignored.
The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
