'use client';
import React, { useState } from 'react';

const CharacterLimitedParagraph = ({ text, limit }) => {
  const [showFullText, setShowFullText] = useState(false);
  const truncatedText = showFullText ? text : text.slice(0, limit);

  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > limit && (
        <button onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default CharacterLimitedParagraph;
