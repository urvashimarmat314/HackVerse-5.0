// NoticeCard.js
import React from "react";
import { FaTrash } from "react-icons/fa";

const NoticeCard = ({ notice, onDelete }) => (
  <div className="notice-card">
    <h3>{notice.title}</h3>
    <p>{notice.description}</p>
    <small>{new Date(notice.timestamp).toLocaleString()}</small>
    <button onClick={() => onDelete(notice.id)} className="delete-btn">
      <FaTrash />
    </button>
  </div>
);

export default NoticeCard;
