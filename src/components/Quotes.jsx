import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setQuote(data.content));
  }, []);

  return (
    <div className="text-white p-4 max-w-4xl">
      <h2 className="text-4xl mb-4">Inspirational Quote</h2>
      <p className="text-lg italic leading-relaxed">{quote}</p>
    </div>
  );
};

export default Quotes;
