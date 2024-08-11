import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
};

function AppIcon({ color = "#fffff", width = "64px", height = "64px" }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
    >
      <path
        d="M92,57c0,2.2-1.8,4-4,4H69.2c-1.7,0-3.2-0.9-3.8-2.6l-3-8.4l-9.8,33.1c-0.5,1.7-2.1,2.9-3.8,2.9 
        c0,0-0.1,0-0.1,0c-1.8-0.1-3.4-1.3-3.8-3.1L32,27l-7.8,31.1c-0.4,1.8-2,2.9-3.9,2.9H4c-2.2,0-4-1.8-4-4s1.8-4,4-4h13.2L28.3,8.9
        C28.7,7.1,30.4,6,32.2,6c1.8,0,3.4,1.3,3.9,3.1l13.2,57.2l9-30.4c0.5-1.7,2-2.9,3.7-2.9c1.7-0.1,3.3,1,3.9,2.6L72,53h16
        C90.2,53,92,54.8,92,57z"
        fill={color}
      />
    </svg>
  );
}

export default AppIcon;
