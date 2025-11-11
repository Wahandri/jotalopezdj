import React from "react";

export default function GradientText({
  text,
  fontSize = 60,
  fontWeight = "bold",
  width = "100%",
}) {
  const id = `gradient-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <svg
      viewBox={`0 0 1000 100`}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="auto"
      preserveAspectRatio="xMinYMin meet"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f7c873" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="70"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={`url(#${id})`}
        fontFamily="inherit"
      >
        {text}
      </text>
    </svg>
  );
}
