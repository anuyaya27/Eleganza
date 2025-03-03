import React, { useState } from 'react';

const OutfitSuggestion = () => {
  const [suggestion, setSuggestion] = useState(null);
  const [style, setStyle] = useState('');

  const getOutfitSuggestion = () => {
    if (style) {
      setSuggestion(`How about a ${style} look today?`);
    } else {
      setSuggestion('Please select a style!');
    }
  };

  return (
    <div className="outfit-suggestion p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-4 text-turquoise-600">Suggested Outfit</h2>

      <div className="mb-4">
        <label htmlFor="style" className="block text-lg mb-2 text-turquoise-500">Select Your Style</label>
        <select
          id="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="p-2 border rounded text-gray-700 focus:ring-2 focus:ring-turquoise-500"
        >
          <option value="">Select a Style</option>
          <option value="Casual">Casual</option>
          <option value="Business">Business</option>
          <option value="Formal">Formal</option>
          <option value="Streetwear">Streetwear</option>
        </select>
      </div>

      <button
        onClick={getOutfitSuggestion}
        className="bg-turquoise-500 text-white p-2 mb-4 rounded hover:bg-turquoise-600 transition duration-300"
      >
        Get Outfit Suggestion
      </button>

      {suggestion && (
        <p className="text-xl text-gray-700 mt-4">
          {suggestion}
        </p>
      )}
    </div>
  );
};

export default OutfitSuggestion;
