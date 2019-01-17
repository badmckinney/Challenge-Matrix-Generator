function matrixGenerator(rows, columns) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];

    for (let x = 0; x < columns; x++) {
      let column = Math.floor((Math.random() * 100)) + 1;
      row.push(column);
    }

    row.sort((a, b) => {
      return a - b;
    });
    matrix.push(row);
  }

  matrix.sort((a, b) => {
    return a[0] - b[0];
  });
  return matrix;
}

module.exports = matrixGenerator;
