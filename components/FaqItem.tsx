"use client";

import { useState } from "react";

export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq${open ? " open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen((v) => !v)}>
        {question} <span className="chev">▼</span>
      </button>
      <div className="faq-a">
        <p>{answer}</p>
      </div>
    </div>
  );
}
