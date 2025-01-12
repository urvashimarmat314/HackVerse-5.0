// NoticeForm.js
import React, { useState } from "react";

const NoticeForm = ({ onAddNotice }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAddNotice({ title, description, timestamp: new Date().toISOString() });
      setTitle("");
      setDescription("");
    } else {
      alert("Both fields are required!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="notice-form">
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Notice</button>
    </form>
  );
};

export default NoticeForm;
