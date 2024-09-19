import React from "react";
import { useEffect, useState } from "react";

const Typing = ({ text, speed }) => {
  const [letter, setletter] = useState("");
  const [index, setindex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const intervel = setInterval(() => {
        setletter((prev) => prev + text.charAt(index));
        setindex(index + 1);
      }, speed);
      return () => clearInterval(intervel);
    }
  }, [ index, text, speed]);
  return <>{letter} </>;
};
export default Typing;
