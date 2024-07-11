import React from "react";
import "./styles/TagCard.css";

const TagCard = ({ tag, onSelectTag }) => {
  return (
    <div className="tag-card" onClick={() => onSelectTag(tag.id)}>
      <img src={tag.image} alt={tag.label} className="tag-image" />
      <h3 className="tag-title">{tag.label}</h3>
    </div>
  );
};

export default TagCard;
