import React, { useState } from "react";

// Simple 4x4 sudoku slice for demo purposes
const initialGrid = [
  [1, '', '', 4],
  ['', 3, '', ''],
  ['', '', 2, ''],
  [4, '', '', 3]
];

function isValid(grid, row, col, value) {
  // Check row & column
  for (let i = 0; i < 4; i++) {
    if (grid[row][i] === value || grid[i][col] === value) return false;
  }
  // Check 2x2 block
  const blockRow = Math.floor(row / 2) * 2;
  const blockCol = Math.floor(col / 2) * 2;
  for (let r = blockRow; r < blockRow + 2; r++) {
    for (let c = blockCol; c < blockCol + 2; c++) {
      if (grid[r][c] === value) return false;
    }
  }
  return true;
}

export default function SudokuSlice() {
  const [grid, setGrid] = useState(initialGrid);

  function handleChange(row, col, val) {
    const value = parseInt(val, 10);
    if (isNaN(value) || value < 1 || value > 4) return;
    if (!isValid(grid, row, col, value)) {
      alert("Invalid move!");
      return;
    }
    const newGrid = grid.map(arr => arr.slice());
    newGrid[row][col] = value;
    setGrid(newGrid);
  }

  return (
    <div style={{ margin: "2rem" }}>
      <h2>Sudoku Slice (4x4)</h2>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {grid.map((row, rIdx) =>
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} style={{
                  border: "1px solid #333", width: 40, height: 40, textAlign: "center"
                }}>
                  {cell
                    ? cell
                    : <input
                        style={{ width: 30, textAlign: "center" }}
                        maxLength={1}
                        onChange={e => handleChange(rIdx, cIdx, e.target.value)}
                      />}
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
      <p style={{ marginTop: "1rem", color: "#666" }}>
        Fill in numbers 1-4 with no repeats in rows, columns, or 2x2 blocks.
      </p>
    </div>
  );
}