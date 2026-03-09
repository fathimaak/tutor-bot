function ChatMessage({ message }) {
  const isBot = message.role === "assistant";

  return (
    <div style={{
      display: "flex",
      justifyContent: isBot ? "flex-start" : "flex-end",
      marginBottom: "16px",
      alignItems: "flex-end",
      gap: "8px"
    }}>

      {isBot && (
        <div style={{
          width: "36px", height: "36px",
          borderRadius: "50%",
          backgroundColor: "#667eea",
          display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: "18px",
          flexShrink: 0
        }}>🤖</div>
      )}

      <div style={{
        maxWidth: "70%",
        padding: "12px 16px",
        borderRadius: isBot ? "4px 18px 18px 18px" : "18px 4px 18px 18px",
        backgroundColor: isBot ? "#ffffff" : "#667eea",
        color: isBot ? "#2d3748" : "#ffffff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        lineHeight: "1.6",
        fontSize: "15px",
        whiteSpace: "pre-wrap"
      }}>
        {message.content}
      </div>

      {!isBot && (
        <div style={{
          width: "36px", height: "36px",
          borderRadius: "50%",
          backgroundColor: "#764ba2",
          display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: "18px",
          flexShrink: 0
        }}>🎓</div>
      )}
    </div>
  );
}

export default ChatMessage;