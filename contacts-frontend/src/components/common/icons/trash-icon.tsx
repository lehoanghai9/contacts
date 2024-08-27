import * as React from "react"

const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ?? "#fff"}
      d="M3.3 16h7.4c.067 0 .133-.034.2-.1.067-.067.1-.133.1-.2V6H3v9.7c0 .067.033.133.1.2.067.066.133.1.2.1ZM.625 3.3V1.8H3.6l1-1h4.8l1 1h2.975v1.5H.625ZM3.3 17.5c-.5 0-.925-.175-1.275-.525A1.736 1.736 0 0 1 1.5 15.7V4.5h11v11.2c0 .5-.175.925-.525 1.275-.35.35-.775.525-1.275.525H3.3ZM3 16h8-8Z"
    />
  </svg>
)
export default TrashIcon
