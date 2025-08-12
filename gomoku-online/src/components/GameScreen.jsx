// src/components/GameScreen.jsx
import React from 'react';
import GameBoard from './GameBoard';

const GameScreen = ({
                        gameState,
                        roomData,
                        timeRemaining,
                        onCellClick,
                        onSurrender
                    }) => {
    const { playerSymbol, currentPlayer, gameStatus } = gameState;
    const { board, moveCount, lastMove, winningCells } = roomData || {};

    const getTurnText = () => {
        if (gameStatus !== 'playing') return 'Waiting for game to start...';
        return currentPlayer === playerSymbol ? "Your turn" : "Opponent's turn";
    };

    return (
        <div className="screen-container">
            <div className="game-container">
                <div className="game-info">
                    <h2>Game Info</h2>
                    <div className="player-info">
                        <div className="active-players">
                            <div className="player-symbol">
                                You: <span>{playerSymbol === '1' ? 'X' : 'O'}</span>
                            </div>
                        </div>
                    </div>
                    <div className="turn-info">
                        <div className="turn-indicator">{getTurnText()}</div>
                        <div className="timer">Time: <span>{timeRemaining}</span>s</div>
                    </div>
                    <div className="game-controls">
                        <button onClick={onSurrender} className="btn btn-secondary">
                            Surrender
                        </button>
                    </div>
                </div>

                <GameBoard
                    board={board || []}
                    gameStatus={gameStatus}
                    currentPlayer={currentPlayer}
                    playerSymbol={playerSymbol}
                    moveCount={moveCount || 0}
                    lastMove={lastMove}
                    winningCells={winningCells || []}
                    onCellClick={onCellClick}
                />
            </div>
        </div>
    );
};

export default GameScreen;