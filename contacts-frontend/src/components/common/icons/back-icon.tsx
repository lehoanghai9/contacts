import * as React from 'react'
const BackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M8 15.625.375 8 8 .375 9.075 1.45 3.25 7.25h12.375v1.5H3.25l5.825 5.8L8 15.625Z"
    />
  </svg>
)
export default BackIcon
