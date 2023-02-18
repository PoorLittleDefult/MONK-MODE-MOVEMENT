import React, { useState, useEffect, useRef } from "react";

function TextChanger() {
  const [currentText, setCurrentText] = useState("");
  const textChangerRef = useRef(null);

  useEffect(() => {
    const texts = ["ENVIRONMENT", "NUTRITION", "SLEEP", "MENTAL HEALTH", "MINDSET"];
    let index = 0;
    let currentCharIndex = 0;
    let currentText = "";
    let delay = false;

    const intervalId = setInterval(() => {
      let targetText = texts[index];
      let char = targetText.charAt(currentCharIndex);
      currentText += char;
      setCurrentText(currentText);
      currentCharIndex++;

      if (currentText === targetText) {
        if (!delay) {
          delay = true;
          setTimeout(() => {
            currentText = "";
            currentCharIndex = 0;
            index = (index + 1) % texts.length;
            delay = false;
          }, 1500);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="welcome-changer">
      <h2 className="changing-text">Change your: &nbsp;</h2>
      <div
        ref={textChangerRef}
        style={{
          fontSize: "30px",
          backgroundImage: "linear-gradient(-45deg, #3b68ff, rgb(0, 174, 255))",
          WebkitBackgroundClip: "text",
          color: "transparent",
          marginTop: "0px",
          fontWeight: "900",
        }}
      >
        {currentText}
      </div>
    </div>
  );
}

export default TextChanger;
