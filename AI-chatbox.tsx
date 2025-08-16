import React, {useState} from 'react';
import './ChatBox.css';
const ChatBox = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const handleSend = async () => {
        try {
            const res = await fetch(`http://localhost:5000/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ message }),

            });
            const data = await res.json();
            setResponse(data.reply);

        } catch (err) {
            console.error('Error', err);
            setResponse('Error: Could not reach the server');

        }
    };
    return (
        <div className="chat-box">
            <textarea
                className="chatbox-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How Can I Help You?"
               />
               <button className="button" onClick={handleSend}>
                   Send
               </button>
            {response && (
                <div className="chatbox_response">
                    <strong>AI response:</strong>
                    <p>{response}</p>

                </div>
            )}


        </div>

    );
};
export default ChatBox;
