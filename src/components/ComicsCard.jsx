import React from "react";

const ComicsCard = ({ title, description, imageUrl }) => {
  return (
    <div className="comic-card">
      <img src={imageUrl} alt={title} className="comic-image" />
      <h2 className="comic-title">{title}</h2>
      <p className="comic-description">{description}</p>
    </div>
  );
}

export default ComicsCard;

