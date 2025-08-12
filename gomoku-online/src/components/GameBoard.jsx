// src/components/GameBoard.jsx
import React from 'react';
import { BOARD_SIZE, CENTER } from '../utils/constants';
import { isValidFirstMove } from '../utils/gameLogic';

const GameBoard = ({
                       board,
                       gameStatus,
                       currentPlayer,
                       playerSymbol,
                       moveCount,
                       lastMove,
                       winningCells,
                       onCellClick
                   }) => {
    const renderCell = (row, col) => {
        const index = row * BOARD_SIZE.COLS + col;
        const cellNumber = row * 20 + (col + 1);

        let cellClasses = ['cell'];

        // Add player markers
        if (board[index] === '1') cellClasses.push('player1');
        if (board[index] === '2') cellClasses.push('player2');

        // Center cell
        if (row === CENTER.ROW && col === CENTER.COL) {
            cellClasses.push('center', 'disabled');
        }

        // Highlight valid first moves
        if (
            moveCount === 0 &&
            gameStatus === 'playing' &&
            currentPlayer === playerSymbol &&
            isValidFirstMove(row, col)
        ) {
            cellClasses.push('valid-first-move');
        }

        // Highlight last move
        if (lastMove && row === lastMove.row && col === lastMove.col) {
            cellClasses.push('last-move');
        }

        // Highlight winning cells
        if (winningCells?.some(cell => cell.row === row && cell.col === col)) {
            cellClasses.push('winning-cell');
        }

        return (
            <div
                key={`${row}-${col}`}
                className={cellClasses.join(' ')}
                data-row={row}
                data-col={col}
                onClick={() => onCellClick(row, col)}
            >
                {!board[index] && (
                    <span className="cell-number">{cellNumber}</span>
                )}
            </div>
        );
    };

    const cells = [];
    for (let row = 0; row < BOARD_SIZE.ROWS; row++) {
        for (let col = 0; col < BOARD_SIZE.COLS; col++) {
            cells.push(renderCell(row, col));
        }
    }

    return (
        <div className="game-board-container">
            <div className="game-board">
                {cells}
            </div>
        </div>
    );
};

export default GameBoard;