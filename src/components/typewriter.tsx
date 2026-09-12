"use client";

import { useEffect, useState } from "react";

// Types a word, pauses, deletes, moves to the next. Loops the list.
export function Typewriter({ words }: { words: readonly string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[i % words.length];
    const done = text === full;
    const delay = deleting ? 40 : done ? 1400 : 70;

    const t = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setI((n) => (n + 1) % words.length);
      } else {
        setText(full.slice(0, deleting ? text.length - 1 : text.length + 1));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="font-bold">
      {text}
      <span className="caret ml-1 inline-block w-2.5 bg-ink align-middle" style={{ height: "1.1em" }} aria-hidden />
    </span>
  );
}
