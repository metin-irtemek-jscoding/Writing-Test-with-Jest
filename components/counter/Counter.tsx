"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  return (
    <div>
      <div className="text-red-700 text-xl mb-4" data-testid="result">
        {count}
      </div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-700 text-white p-2 rounded-md"
      >
        Increment
      </button>
      <input
        type="number"
        name="firstValue"
        value={firstValue}
        onChange={(e) => setFirstValue(parseInt(e.target.value))}
        className="text-blue-700 ml-4 mr-4 bg-gray-100 p-2 rounded-md"
      />
      <button
        className="bg-blue-700 text-white p-2 rounded-md"
        onClick={() => setCount(firstValue)}
      >
        Set First Value
      </button>
    </div>
  );
};
