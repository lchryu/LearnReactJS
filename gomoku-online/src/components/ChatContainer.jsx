// src/components/ChatContainer.jsx
import React, { useState, useEffect, useRef } from 'react';

const ChatContainer = ({ messages, onSendMessage }) => {
    const [chatVisible, setChatVisible] = useState(true);
    const [chatInput, setChatInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        const message = chatInput.trim();
        if (message) {
            onSendMessage(message);
            setChatInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h3>Chat Room</h3>
                <button
                    className="chat-toggle"
                    onClick={() => setChatVisible(!chatVisible)}
                >
                    {chatVisible ? '−' : '+'}
                </button>
            </div>

            {chatVisible && (
                <div className="chat-content">
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chat-message ${msg.isPlayer1 ? 'player1' : 'player2'}`}
                            >
                                <div className="message-sender">{msg.sender}</div>
                                <div className="message-content">{msg.content}</div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input-container">
                        <input
                            type="text"
                            className="chat-input"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSendMessage} className="chat-send">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatContainer;