// src/components/RoomScreen.jsx
import React from 'react';

const RoomScreen = ({
                        roomData,
                        gameState,
                        onReady,
                        onLeaveRoom,
                        onKickPlayer
                    }) => {
    const { roomId, isHost, isReady } = gameState;
    const { player1, player2, player1Ready, player2Ready } = roomData || {};

    return (
        <div className="screen-container">
            <div className="room-container">
                <div className="room-info">
                    <div className="room-header">
                        <h2>Game Room</h2>
                        <div className="room-id">Room ID: <span>{roomId}</span></div>
                    </div>

                    <div className="players-container">
                        <div className="player-card">
                            <img
                                className="user-avatar"
                                src={player1?.avatar || ''}
                                alt="Player 1"
                            />
                            <div className="player-info">
                                <div>{player1?.name || 'Player 1'}</div>
                            </div>
                            <div className={`player-status ${player1Ready ? 'status-ready' : 'status-waiting'}`}>
                                {player1Ready ? 'Ready' : 'Not Ready'}
                            </div>
                        </div>

                        <div className="player-card">
                            <img
                                className="user-avatar"
                                src={player2?.avatar || ''}
                                alt="Player 2"
                            />
                            <div className="player-info">
                                <div>{player2?.name || 'Waiting for player...'}</div>
                            </div>
                            <div className={`player-status ${player2Ready ? 'status-ready' : 'status-waiting'}`}>
                                {player2Ready ? 'Ready' : 'Waiting'}
                            </div>
                            {isHost && player2 && (
                                <button onClick={onKickPlayer} className="btn btn-secondary kick-btn">
                                    Kick
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="room-controls">
                        <button onClick={onReady} className="btn btn-primary">
                            {isReady ? 'Cancel Ready' : 'Ready'}
                        </button>
                        <button onClick={onLeaveRoom} className="btn btn-secondary">
                            Leave Room
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomScreen;