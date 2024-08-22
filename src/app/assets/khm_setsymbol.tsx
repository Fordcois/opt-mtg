import React from "react";

// Define a type or interface for the component props
interface KHM_setSymbolProps {
  width: string;
  height: string;
}

// Use the props in the component
const KHM_setSymbol: React.FC<KHM_setSymbolProps> = ({ width, height }) => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" 
      xmlSpace="preserve" 
      fill="white"
      width={width}
      height={height}
      style={{clipRule: "evenodd", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2}} 
      viewBox="0 0 880.583 404.679">
      <path d="M132.5 23.2c-77 33.9-98.9 79.8-109.4 92.4-9.4 47.7-13.5 103.4-1.3 176.1 46.4 33.7 66.3 90 64.6 127.5 26.3-18 36.9-28.3 55.7-60.8-22.4-17.2-83.3-84.2-54.4-191.9 2.1-8 5.7-10.9 3.8.8-11.4 70.6 6.3 110.6 27.6 143 1.2-5.6 4.5-12.6 10.7-22.9 5.5-9.1 39.4-38.9 39.4-38.9h43.3v109.9s0 53.3-33.7 86.1c4.8 5.8 19.4 7.9 19.4 7.9s-15.7 21.7-23.4 25.8c28.3 23.4 52.1 21.8 59.2 21.8 7 0 30.8 1.6 59.2-21.8-7.7-4.1-23.4-25.8-23.4-25.8s14.7-2.2 19.4-7.9c-33.7-32.7-33.7-86.1-33.7-86.1V248.7h43.3s33.9 29.7 39.4 38.9c6.2 10.3 9.5 17.3 10.7 22.9 21.2-32.4 39-72.4 27.6-143-1.9-11.7 1.7-8.8 3.8-.8 28.9 107.7-32 174.7-54.4 191.9 18.8 32.4 29.4 42.8 55.7 60.8-1.8-37.6 18.1-93.9 64.6-127.5 12.2-72.7 8-128.5-1.3-176.2-10.5-12.6-32.4-58.5-109.4-92.4l12.4 80.1-47.6 50.6h-39.4v-14l-26.8-64.2-27 64.2v13.9h-39.4l-47.6-50.6z"/>
      </svg>
  );
}

export default KHM_setSymbol;
