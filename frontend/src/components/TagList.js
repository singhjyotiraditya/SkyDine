import React, { useEffect, useRef } from "react";
import "./styles/TagList.css";
import TagCard from "./TagCard";

const TagList = ({ tags, onSelectTag }) => {
  const tagContainerRef = useRef(null);

  useEffect(() => {
    const tagContainer = tagContainerRef.current;

    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        tagContainer.scrollLeft += event.deltaY;
      }
    };

    const handleTouchStart = (event) => {
      tagContainer.dataset.touchStartX = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      const touchStartX = parseFloat(tagContainer.dataset.touchStartX);
      const touchMoveX = event.touches[0].clientX;
      const deltaX = touchStartX - touchMoveX;
      tagContainer.scrollLeft += deltaX;
      tagContainer.dataset.touchStartX = touchMoveX;
    };

    tagContainer.addEventListener("wheel", handleWheel);
    tagContainer.addEventListener("touchstart", handleTouchStart);
    tagContainer.addEventListener("touchmove", handleTouchMove);

    return () => {
      tagContainer.removeEventListener("wheel", handleWheel);
      tagContainer.removeEventListener("touchstart", handleTouchStart);
      tagContainer.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="tag-main">
      <div className="tag-container" ref={tagContainerRef}>
        <div className="tag-list">
          {tags.map((tag) => (
            <TagCard key={tag.id} tag={tag} onSelectTag={onSelectTag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagList;
