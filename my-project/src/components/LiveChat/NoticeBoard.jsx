import React, { useEffect, useState } from "react";
import { database } from "./firebaseConfig";
import { ref, push, onValue } from "firebase/database";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const noticesRef = ref(database, "notices");
    onValue(noticesRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Fetched notices: ", data); // Debugging log
      const loadedNotices = data
        ? Object.keys(data).map((id) => ({ id, ...data[id] }))
        : [];
      setNotices(loadedNotices.reverse());
    });
  }, []);

  const addNotice = (e) => {
    e.preventDefault();
    if (title && description) {
      const noticesRef = ref(database, "notices");
      push(noticesRef, { title, description, timestamp: new Date().toISOString() });
      console.log("Adding notice: ", { title, description }); // Debugging log
      setTitle("");
      setDescription("");
    } else {
      alert("Please fill out both the title and description.");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#001f3f", // Dark blue background
        minHeight: "100vh", // Full page height
        color: "white", // White text for contrast
      }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>Notice Board</h1>

      <form
        onSubmit={addNotice}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Publish Notice
        </button>
      </form>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {notices.length > 0 ? (
          notices.map((notice) => (
            <div
              key={notice.id}
              style={{
                background: "white",
                color: "#001f3f", // Dark blue text for cards
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ margin: "0 0 10px" }}>{notice.title}</h3>
              <p style={{ margin: "0 0 10px" }}>{notice.description}</p>
              <small>
                Published on: {new Date(notice.timestamp).toLocaleString()}
              </small>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No notices available. Add one now!</p>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
