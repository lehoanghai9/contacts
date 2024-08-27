import * as React from "react";

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M6.25 13.75v-6h-6v-1.5h6v-6h1.5v6h6v1.5h-6v6h-1.5Z" />
  </svg>
);

export default PlusIcon;
