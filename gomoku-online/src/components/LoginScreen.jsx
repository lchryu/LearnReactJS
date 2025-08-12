// src/components/LoginScreen.jsx
import React, { useState } from 'react';

const LoginScreen = ({ user, onLogin, onCreateRoom, onJoinRoom }) => {
    const [roomIdInput, setRoomIdInput] = useState('');

    const handleJoinRoom = () => {
        const roomId = roomIdInput.trim().toUpperCase();
        if (roomId) {
            onJoinRoom(roomId);
        } else {
            alert("Please enter a room ID");
        }
    };

    const handleInputChange = (e) => {
        setRoomIdInput(e.target.value.toUpperCase());
    };

    return (
        <div className="screen-container">
            <div className="login-box">
                <h1>Gomoku Online</h1>

                {!user ? (
                    <div id="beforeLogin">
                        <button onClick={onLogin} className="btn-google">
                            <img
                                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                width="18"
                                height="18"
                                alt="Google"
                            />
                            Sign in with Google
                        </button>
                    </div>
                ) : (
                    <div id="afterLogin">
                        <div className="user-info">
                            <img className="user-avatar" src={user.avatar} alt="Your avatar" />
                            <span>{user.name}</span>
                        </div>

                        <div className="join-create-section">
                            <button onClick={onCreateRoom} className="btn btn-primary">
                                Create New Room
                            </button>

                            <div className="join-section">
                                <h3>Or Join Room</h3>
                                <div className="join-input-group">
                                    <input
                                        type="text"
                                        value={roomIdInput}
                                        onChange={handleInputChange}
                                        placeholder="Enter Room ID"
                                        className="room-input"
                                        maxLength="6"
                                    />
                                    <button onClick={handleJoinRoom} className="btn btn-secondary">
                                        Join Room
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginScreen;