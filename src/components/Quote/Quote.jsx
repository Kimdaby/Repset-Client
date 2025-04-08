import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Quote.scss";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/quote");
        if (res.data) {
          setQuote(res.data.quote);
          setAuthor(res.data.author);
        }
      } catch (err) {
        console.error("Failed to fetch quote:", err);
        setQuote("You can do it.");
        setAuthor("David (fallback)");
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote">
      <h3 className="quote__title">Daily Motivation</h3>
      <div className="quote__card">
        <p className="quote__text">“{quote}”</p>
        <p className="quote__author">— {author}</p>
      </div>
    </div>
  );
};

export default Quote;
