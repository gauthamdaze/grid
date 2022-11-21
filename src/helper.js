export function calculateWinner(squares) {
  console.log(squares);
  const lines = [
    [0, 1, 2, 3],
    [3, 4, 5, 6],
    [6, 7, 8, 9],
    [0, 3, 6, 9],
    [1, 4, 7, 10],
    [2, 5, 8, 11],
    [0, 4, 8, 12],
    [2, 4, 6, 8]
  ];

  if (squares[15] != null) {
    return squares[15];
  }
  // for (let i = 0; i < lines.length; i++) {
  //   const [a, b, c, d] = lines[i];

  //   if (
  //     squares[a] &&
  //     squares[a] === squares[b] &&
  //     squares[a] === squares[c] &&
  //     squares[a] === squares[d]
  //   ) {
  //     return squares[a];
  //   }
  // }
  return null;
}

function checkLegalmove(squares) {}
