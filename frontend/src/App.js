// App.js
// This is the main chat application
// It manages all messages and talks to our backend server

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ChatMessage from "./components/ChatMessage";

function App() {

  // Stores all chat messages
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hi! I'm TutorBot — your personal study companion!\n\nAsk me anything about any subject — Maths, Science, History, English, or anything else.\n\nI'll explain it simply with examples! 😊"
    }
  ]);

  // Stores what the student is typing right now
  const [input, setInput] = useState("");

  // True while waiting for AI response
  const [isLoading, setIsLoading] = useState(false);

  // Used to auto scroll to bottom of chat
  const bottomRef = useRef(null);

  // Every time a new message appears, scroll down automatically
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // This runs when student clicks Send or presses Enter
  const sendMessage = async () => {

    // Don't send if input is empty
    if (!input.trim() || isLoading) return;

    // Create user message object
    const userMessage = { role: "user", content: input };

    // Add to chat immediately so it shows right away
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Clear the input box
    setInput("");

    // Show loading dots
    setIsLoading(true);

    try {
      // Send full conversation to our backend (server.js)
      // Backend will send it to Groq AI and return the answer
      const response = await axios.post("http://localhost:5000/ask", {
        messages: updatedMessages
      });

      // Add AI reply to chat
      setMessages([...updatedMessages, {
        role: "assistant",
        content: response.data.reply
      }]);

    } catch (error) {
      // Show error if backend is not running
      setMessages([...updatedMessages, {
        role: "assistant",
        content: "❌ Cannot connect to server! Make sure the backend is running with 'node server.js'"
      }]);
    }

    // Hide loading dots
    setIsLoading(false);
  };

  // Press Enter to send (Shift+Enter for new line)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px"
    }}>

      {/* Main chat box */}
      <div style={{
        width: "100%",
        maxWidth: "750px",
        height: "90vh",
        backgroundColor: "#f7f8fc",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
      }}>

        {/* ===== HEADER ===== */}
        <div style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          padding: "20px 24px",
          color: "white",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "22px", fontWeight: "700" }}>
            🎓 TutorBot
          </h1>
          <p style={{ fontSize: "13px", opacity: 0.9, marginTop: "4px" }}>
            Your 24/7 Doubt-Solving Study Companion
          </p>
        </div>

        {/* ===== MESSAGES AREA ===== */}
        <div style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px 16px",
        }}>

          {/* Show all messages */}
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}

          {/* Loading animation */}
          {isLoading && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px"
            }}>
              <div style={{
                width: "36px", height: "36px",
                borderRadius: "50%",
                backgroundColor: "#667eea",
                display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "18px"
              }}>🤖</div>
              <div style={{
                backgroundColor: "white",
                padding: "12px 20px",
                borderRadius: "4px 18px 18px 18px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                color: "#667eea",
                fontWeight: "600"
              }}>
                Thinking...
              </div>
            </div>
          )}

          {/* Auto scroll target */}
          <div ref={bottomRef} />
        </div>

        {/* ===== INPUT AREA ===== */}
        <div style={{
          padding: "16px",
          backgroundColor: "white",
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          gap: "10px",
          alignItems: "flex-end"
        }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your question here... e.g. 'Explain gravity simply'"
            rows={2}
            style={{
              flex: 1,
              padding: "12px 16px",
              borderRadius: "16px",
              border: "2px solid #e2e8f0",
              fontSize: "15px",
              resize: "none",
              outline: "none",
              fontFamily: "inherit",
              lineHeight: "1.5"
            }}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading}
            style={{
              padding: "12px 24px",
              background: isLoading
                ? "#c4b5fd"
                : "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              border: "none",
              borderRadius: "16px",
              fontSize: "15px",
              fontWeight: "700",
              cursor: isLoading ? "not-allowed" : "pointer",
              whiteSpace: "nowrap"
            }}
          >
            {isLoading ? "..." : "Send 🚀"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;