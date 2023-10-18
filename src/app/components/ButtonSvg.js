import React from "react";

function LeftArrowSvg() {
  return (
    <div style={{ width: "55px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="50"
        viewBox="0 0 55 50"
        fill="none"
      >
        <circle
          cx="25"
          cy="25"
          r="24.21"
          transform="rotate(-360 25 25)" 
          fill="#13670B"
          strokeWidth="1.58"
        />
        <path d="M22 32L30 25L22 18" stroke="white" strokeWidth="1.85" />
        {/* <path d="M26 32L34 25L26 18" stroke="white" strokeWidth="1.85" />  */}
        {/* <path d="M22 32L30 25L22 18" stroke="white" strokeWidth="1.85" /> */}
      </svg>
    </div>
  );
}

function RightArrowSvg() {
  return (
    <div style={{ width: "55px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="50"
        viewBox="0 0 55 50"
        fill="none"
      >
        <circle
          cx="25"
          cy="25"
          r="24.21"
          transform="rotate(-180 25 25)"
          stroke="#13670B"
          strokeWidth="1.58"
        />
        <path d="M29 32L21 25L29 18" stroke="#13670B" strokeWidth="1.85" />
      </svg>
    </div>
  );
}

export { LeftArrowSvg, RightArrowSvg };
