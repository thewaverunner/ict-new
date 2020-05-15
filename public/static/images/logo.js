import * as React from "react"
function SvgComponent(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1920 332" {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path
            data-name="Rectangle 116"
            transform="translate(4564 -2682)"
            d="M0 0h1920v332H0z"
          />
        </clipPath>
        <clipPath id="prefix__b">
          <path
            data-name="Rectangle 115"
            transform="translate(-3026 3660)"
            fill="#fff"
            stroke="#707070"
            d="M0 0h1920v850H0z"
          />
        </clipPath>
      </defs>
      <g
        data-name="Mask Group 35"
        transform="translate(-4564 2682)"
        clipPath="url(#prefix__a)"
      >
        <g
          data-name="Mask Group 34"
          transform="translate(7590 -6342)"
          clipPath="url(#prefix__b)"
        >
          <image
            width={1928.5}
            height={1285.5}
            transform="translate(-3034 3660)"
          />
        </g>
      </g>
    </svg>
  )
}
const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent